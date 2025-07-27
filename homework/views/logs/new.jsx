const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Log Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action="/logs" method="POST">
                title: <input type="text" name="title" /><br/>
                entry: <input type="text" name="entry" /><br/>
                Ship is broken: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Create Log" />
            </form>
        </div>
    )
}

module.exports = New

