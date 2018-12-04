import React, {PureComponent, Fragment} from "react";

/**
 * 附头部、导航布局组件
 */
export default class AttachHeadAndSideLayout extends PureComponent{
    render (){
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}
