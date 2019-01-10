/**
 * 约定优于配置,自动处理reducer文件内容
 */
const path = require('path');
const fs = require('fs');
const results_import = []; //import集
const results_reducer = {}; //reducer集
const common_cond = "src" + path.sep + "view" + path.sep + "common"; //common查找常量
const page_cond = "src" + path.sep + "view" + path.sep + "page"; //page查找常量
const reducer_assembly_path = "src" + path.sep + "data" + path.sep + "reducer-basic.js"; //装配路径常量

const wrapper_handle = (p) => {
    let _file_name_ = path.basename(p);
    let _store_name_ = path.dirname(path.resolve(p));
    let _parent_name_ = path.dirname(_store_name_).toLowerCase();
    _parent_name_ = _parent_name_.substring(_parent_name_.lastIndexOf(path.sep) + 1);

    if(_file_name_ === "interface.js" && _store_name_.endsWith("store")){
        let _common_index_ = p.lastIndexOf(common_cond);
        let _page_index = p.lastIndexOf(page_cond);
        let relative_path = "";
        if(_common_index_ > 0){// 追加_common_
            relative_path = "_common_" + p.substring(_common_index_ + common_cond.length).replace(/\\/g,"/").replace(/\.(jsx|js)/,"");
        }
        if(_page_index > 0){// 追加_page_
            relative_path = "_page_" + p.substring(_page_index + page_cond.length).replace(/\\/g,"/").replace(/\.(jsx|js)/,"");
        }
        results_import.push("import {reducer as " + _parent_name_ + "Reducer} from '" + relative_path + "';");
        results_reducer[_parent_name_] = _parent_name_ + "Reducer";
    }
};

const wrapper_conf = (p) => {
    const stats = fs.statSync(p);
    if(stats.isFile()){
        return p;
    }
    if(stats.isDirectory()){
        const ps = fs.readdirSync(p);
        for(let i = 0; i < ps.length; i++){
            const _ps_ = p + path.sep + ps[i];
            const pth = wrapper_conf(_ps_);
            if(pth) wrapper_handle(pth);
        }
    }
};

/**
 * 约定优于配置,入口
 */
const auto_conf_reducer = (root = 'src') => {
    if(!root.startsWith("src")){
        console.error("config reducer entry error,please verify handle");
        return;
    }
    results_import.length = 0;
    results_import.push("import {combineReducers} from 'redux-immutable';");
    const root_path = path.resolve(__dirname, root);
    const dirs = fs.readdirSync(root_path);
    for(let i = 0; i < dirs.length; i++){
        const p = root_path + path.sep + dirs[i];
        const stats = fs.statSync(p);
        if(stats.isFile()){
            wrapper_handle(p);
        }
        if(stats.isDirectory()){
            wrapper_conf(p);
        }
    }

    let new_conf = (JSON.stringify(results_import, null, "\t").replace(/[\[\]",\t]/g,"").replace(/\r/g,"\n"));
	new_conf += "export default combineReducers(" + JSON.stringify(results_reducer, null, "\t").replace(/"/g,"") + ");";
	fs.writeFileSync(path.resolve(__dirname, reducer_assembly_path),new_conf);
};

auto_conf_reducer('src/view');
