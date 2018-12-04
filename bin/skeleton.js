#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execFile = require("child_process").execFileSync;

const project_package = {
    dependencies: [
        "prop-types",
        "create-react-app"
    ],
    devDependencies: [
        "react-app-rewired",
        "babel-plugin-import",
        "axios",
        "history",
        "immutable",
        "react-redux",
        "react-router-dom",
        "redux",
        "redux-immutable",
        "redux-logger",
        "redux-thunk",
        "styled-components",
        "antd"
    ],
    scripts: {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    }
}


const biz_root_path = process.cwd() + "\\";
const lib_root_path = process.env.NODE_GLOBAL + '\\node_modules\\react-app-skeleton\\lib\\';

/**
 * 迁移
 * @param {*} path
 */
function migrate(path){
    const stats = fs.statSync(path);
    const dist = biz_root_path + path.substring(path.indexOf(lib_root_path) + lib_root_path.length, path.length);
    if(stats.isFile()){
        fs.copyFileSync(path, dist);
    }
    if(stats.isDirectory()){
        fs.existsSync(dist) ? null : fs.mkdirSync(dist);
        const paths = fs.readdirSync(path);
        paths.map(item => {
            migrate(path + "\\" + item);
        });
    }
}

/**
 * 清理业务src目录
 * @param {*} path
 */
function sweep(path){
    const stats = fs.statSync(path);
    if(stats.isFile()){
        fs.unlinkSync(path);
    }
    if(stats.isDirectory()){
        const paths = fs.readdirSync(path);
        paths.map(item => {
            sweep(path + "\\" + item);
        });
        fs.rmdirSync(path);
    }
}

/**
 * 处理
 */
function process_run(){
    // const argvs = process.argv;
    // if(argvs.length !== 3){
    //     console.log("请参照命令 create-app-skeleton project_name 格式重新输入");
    //     process.exit(1);
    // }
    // console.log("react app skeketon structure start, please wait 2-3 minute...");
    // execFile('create-react-app.cmd', [argvs[2]]);
    // biz_root_path = biz_root_path + "\\" + argvs[2] + "\\";

    //清理业务src目录
    const biz_paths = fs.readdirSync(biz_root_path + "src");
    biz_paths.map(item => {
        sweep(biz_root_path + "src\\" + item);
    });

    //迁移工程目录骨架
    const local_paths = fs.readdirSync(lib_root_path);
    local_paths.map(item => {
        migrate(lib_root_path + item);
    });

    //更新工程package.js文件
    let package_json = fs.readFileSync(biz_root_path + "package.json");
    let package_json_new = JSON.parse(package_json);
    package_json_new.scripts = project_package.scripts;
    fs.writeFileSync(biz_root_path + "package.json", JSON.stringify(package_json_new, null, "\t"));
    execFile('npm.cmd', ['install', '-S', ...project_package.dependencies]);
    execFile('npm.cmd', ['install', '-D', ...project_package.devDependencies])

    console.log('react app skeketon structure success');
};

//调用
process_run();
