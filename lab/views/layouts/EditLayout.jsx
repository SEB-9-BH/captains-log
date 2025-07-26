const React=require("react")

function EditLayout (props)
{
return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="stylesheet" href="/editStyle.css" />
            <title>Captain's Log</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
)
}

module.exports= EditLayout