import React from 'react'

export default function MainContentHeader() {
    return (
            <header>
                <h2>
                    <label htmlFor="nav-toggle">
                        <span className="las la-bars"></span>
                    </label>
                    Dashboard
                </h2>
                <div className="search-wrapper">
                    <span className="las la-search"></span>
                    <input type="search" placeholder="Searh here" />
                </div>
                <div className="user-wrapper">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="30" height="30" alt="admin" />
                    <div>
                        <h4>Maria Doe</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </header>
    )
}
