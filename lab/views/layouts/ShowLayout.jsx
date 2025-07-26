const React=require("react")

function ShowLayout (props)
{
return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="stylesheet" href="/showStyle.css" />

            <title>Captain's Log</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)
}

module.exports= ShowLayout