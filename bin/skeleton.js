#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execFile = require("child_process").execFileSync;

const project_package = {
    dependencies: [
        // "create-react-app",
        "prop-types",
        "antd",
        "axios",
        "history",
        "immutable",
        "react-redux",
        "react-router-dom",
        "redux",
        "redux-immutable",
        "redux-thunk",
        "styled-components"
    ],
    devDependencies: [
        "react-app-rewired",
        "babel-plugin-import",
        "redux-logger",
        // "style-loader",
        // "css-loader",
        // "sass-loader",
        // "ts-loader",
        // "http-proxy-middleware"
    ],
    scripts: {
        "start": "node assembly-reducer.js && react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    }
}


const biz_root_path = process.cwd() + path.sep;
const lib_root_path = process.env.NODE_GLOBAL + path.sep + 'node_modules' + path.sep + 'react-app-skeleton' + path.sep + 'lib' + path.sep;

/**
 * 迁移
 * @param {*} pth
 */
function migrate(pth){
    const stats = fs.statSync(pth);
    const dist = biz_root_path + pth.substring(pth.indexOf(lib_root_path) + lib_root_path.length, pth.length);
    if(stats.isFile()){
        fs.copyFileSync(pth, dist);
    }
    if(stats.isDirectory()){
        fs.existsSync(dist) ? null : fs.mkdirSync(dist);
        const paths = fs.readdirSync(pth);
        paths.map(item => {
            migrate(pth + path.sep + item);
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
            sweep(path + path.sep + item);
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
    console.log("react app skeketon structure start add related dependencies, please wait 1-2 minute...");
    
    //清理业务src目录
    const biz_paths = fs.readdirSync(biz_root_path + "src");
    biz_paths.map(item => {
        sweep(biz_root_path + "src" + path.sep + item);
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
