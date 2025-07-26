const React=require("react")

function Layout (props)
{
return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <title>Captain's Log</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)
}

module.exports= Layout