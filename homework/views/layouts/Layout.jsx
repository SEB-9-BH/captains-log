const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <title>{!props.log.name?'Hello From Logs': props.log.name}</title>
            <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
            {props.children}
        </body>
    </html>
 )
}

module.exports = Layout