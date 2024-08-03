import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function PageOne() {
    return (
        <div>
            <h1>HTML Page </h1>
            <hr />
            <p>HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>

            <ul>
                <li><Link to="html1">html Tag</Link></li>
                <li><Link to="html2">html Attribute</Link></li>
                <li><Link to="html3">html Article</Link></li>
            </ul>
            <Outlet />


        </div>
    )
}

export default PageOne