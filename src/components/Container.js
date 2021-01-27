import React, { Component } from 'react'
import MainContent from './MainContent';
import SidebarContainer from './SidebarContainer';
import MainContentHeader from "./MainContentHeader";

import './css/main.css';
export default class Container extends Component {
    render() {
        return (
            <div className="container mainTheme">
                <input type="checkbox" id="nav-toggle"></input>
                <SidebarContainer />
                <div className= "main-content">
                    <MainContentHeader />
                    <MainContent />
                </div>
            </div>
        )
    }
}
