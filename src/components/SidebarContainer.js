import React, { Component } from 'react'
import Logo from './Logo';
import SidebarMenu from './SidebarMenu';



export default class SidebarContainer extends Component {
    render() {
        return (
            <div className="sidebar">
                <Logo />
                <SidebarMenu />
            </div>
        )
    }
}
