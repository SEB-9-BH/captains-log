const React = require("react");

function Layout (props) {
    return(
        <html>
        <head>
            <title>{props?.log?.title || props.title ||"Hello from Logs"}</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            {props.children}
        </body>
        </html>
    )
};

module.exports = Layout;