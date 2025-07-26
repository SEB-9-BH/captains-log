const React = require('react')
const Layout = require('../layouts/Layout.jsx')

function Edit (props) {
    const { title, _id, shipIsBroken, entry } = props.log

    return(
        <Layout log={props.log}>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Is it broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' title="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </Layout>
    )
}

module.exports = Edit