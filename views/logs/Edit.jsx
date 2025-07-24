const React = require('react')
const Layout = require('../layouts/Layout')

function Edit (props) {
    const { title, _id, shipLsBroken, entry } = props.log

    return(
        <Layout log={props.log}>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Is broken: {shipLsBroken? <input type="checkbox" name="shipLsBroken" defaultChecked />: <input type='checkbox' name="shipLsBroken"/>}<br/>
                <input type="submit" class="sub" value="Update log" />
            </form>
        </Layout>
    )
}

module.exports = Edit