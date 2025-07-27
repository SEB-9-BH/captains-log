const React = require('react')
const Layout = require('../layouts/Layout')

function New (props) {
    return(
        <Layout>
        <div>
            <h1>New Log Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="textarea" name="entry" /><br/>
                Ship Is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Create Log" />
            </form>
        </div>
        </Layout>
    )
}

module.exports = New