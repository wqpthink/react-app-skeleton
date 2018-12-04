import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import StringUtil from '../../../util/StringUtil';




class Login extends PureComponent{


    render(){
        StringUtil.isEmpty('');

        return <div></div>;
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
