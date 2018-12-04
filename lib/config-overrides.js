const {injectBabelPlugin} = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env){
    config = injectBabelPlugin(
        [
            'import',
            {libraryName: 'antd', libraryDirectory: 'lib', style: 'css'}
        ],
        config
    );

    config.resolve.alias = {
        asset: path.resolve(__dirname, 'src/asset/'),
        conf: path.resolve(__dirname, 'src/conf/'),
        util: path.resolve(__dirname, 'src/util/'),
        common: path.resolve(__dirname, 'src/view/common/'),
        layout: path.join(__dirname, 'src/view/layout/'),
        page: path.resolve(__dirname, 'src/view/page/')
    };

    return config;
}
