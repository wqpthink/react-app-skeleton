import AttachBasicLayout from "_layout_/AttachBasicLayout";
import AttachHeadAndSideLayout from "_layout_/AttachHeadAndSideLayout";

import NotFound from "_common_/notfound/NotFound";
import Login from '_page_/login/Login';
import Home from '_page_/home/Home';



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
