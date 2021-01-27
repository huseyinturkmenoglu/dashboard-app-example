import React from 'react'

export default function MainContentGridCustomersBody() {
    const customerInfo = [
        {
            "photo" : "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            "customerFullName" : "Lewis S. Cunningham",
            "customerTitle" : "CEO Excerpt"
        },
        {
            "photo" : "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            "customerFullName" : "Mary Johnson",
            "customerTitle" : "CFO Excerpt"
        },
        {
            "photo" : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
            "customerFullName" : "Smith Samandra",
            "customerTitle" : "CTO Excerpt"
        },
        {
            "photo" : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            "customerFullName" : "Sarah Evans",
            "customerTitle" : "UX Expert"
        }
    ]

    return (
        <div className="card-body">
            {customerInfo.map((v, i) => 
                <div key={i} className="customer">
                    <div className="info">
                        <img
                            src={v.photo}
                            width="40px"
                            height="40px"
                            alt="tester"
                        />
                        <div>
                            <h4>{v.customerFullName}</h4>
                            <small>{v.customerTitle}</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
            )}
        </div>
    )
}
