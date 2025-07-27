const React = require('react')
const Layout = require('../layouts/Layout')

function Edit (props) {
    const { title, _id, shipIsBroken, entry } = props.log

    return(
        <Layout log={props.log}>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="textarea" name="entry" defaultValue={entry}/><br/>
                Ship Is Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </Layout>
    )
}

module.exports = Edit
