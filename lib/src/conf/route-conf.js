import BasicLayout from "layout/BasicLayout";
import AttachHeadAndSideLayout from "layout/AttachHeadAndSideLayout";

import NotFound from "common/notfound/NotFound";
import Login from 'page/login/Login';
import Home from 'page/home/Home';



/**
 * 页面路由配置
 * @type {*[]}
 */
const routeConf = [
    {
        path: '/',
        layout: AttachHeadAndSideLayout,
        component: Home
    },
    {
        path: '/login',
        layout: BasicLayout,
        component: Login
    },
    {
        path: '*',
        layout: BasicLayout,
        component: NotFound
    }
];

export default routeConf;
