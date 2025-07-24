const React = require('react')
function New (props) {
    return(
        <div>
            <a href='/logs'>Go back to Index Page</a>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="textarea" name="entry" /><br/>
                Is it broken?: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Create log" />
            </form>

        </div>
    )
}

module.exports = New