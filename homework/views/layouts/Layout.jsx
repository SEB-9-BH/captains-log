const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <title>Hello welcome</title>
            <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
            {props.children}
        </body>
    </html>
 )
}

module.exports = Layout