const React=require("react")

function NewLayout (props)
{
return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="stylesheet" href="/newStyle.css" />

            <title>Captain's Log</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)
}

module.exports= NewLayout