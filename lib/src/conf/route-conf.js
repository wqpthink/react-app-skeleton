import AttachBasicLayout from "_layout/AttachBasicLayout";
import AttachHeadAndSideLayout from "_layout/AttachHeadAndSideLayout";

import NotFound from "_common/notfound/NotFound";
import Login from '_page/login/Login';
import Home from '_page/home/Home';



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
