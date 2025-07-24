const React = require('react')
const Layout = require('../layouts/Layout')

function New (props) {
    return(
        <Layout log={props.log}>
            <h1>New Log Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action="/logs" method="POST">
                title: <input type="text" name="title" /><br/>
                Entry: <input type="text" name="entry" /><br/>
                Is the ship broken: <input type="checkbox" name="shipLsBroken" /><br/>
                <input type="submit" class="sub" value="Create Log" />
            </form>
        </Layout>
    )
}

module.exports = New