import React, {PureComponent, Fragment} from "react";
import Header from 'common/header/Header';
import SideNav from 'common/sidenav/SideNav';
import {HeaderAndSideContentWrapper, HeaderAndSideContentChildLeftWrapper, HeaderAndSideContentChildRightWrapper} from './layout-style';

/**
 * 附头部、导航布局组件
 */
export default class AttachHeadAndSideLayout extends PureComponent{
    render (){
        return (
            <Fragment>
                <Header/>
                <HeaderAndSideContentWrapper>
                    <HeaderAndSideContentChildLeftWrapper><SideNav/></HeaderAndSideContentChildLeftWrapper>
                    <HeaderAndSideContentChildRightWrapper>{this.props.children}</HeaderAndSideContentChildRightWrapper>
                </HeaderAndSideContentWrapper>
            </Fragment>
        );
    }
}
