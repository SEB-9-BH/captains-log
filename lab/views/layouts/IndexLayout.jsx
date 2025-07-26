const React=require("react")

function IndexLayout (props)
{
return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="stylesheet" href="/indexStyle.css" />
            <title>Captain's Log</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)
}

module.exports= IndexLayout