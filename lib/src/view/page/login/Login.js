import React, {PureComponent} from 'react';
import {connect} from 'react-redux';


class Login extends PureComponent{



    render(){

        return (<div>登录</div>);
    }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

