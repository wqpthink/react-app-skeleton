import AttachBasicLayout from "layout/AttachBasicLayout";
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
        layout: AttachBasicLayout,
        component: Login
    },
    {
        path: '*',
        layout: AttachBasicLayout,
        component: NotFound
    }
];

export default routeConf;
