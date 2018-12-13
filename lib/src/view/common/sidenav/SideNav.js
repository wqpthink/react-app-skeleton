import React,{PureComponent} from 'react';


class SideNav extends PureComponent{

    render(){
        return(
            <div>
                {props.children}
            </div>
        );
    }
}

export default SideNav;
