const React = require('react')
// const Layout = require('../../layouts/Layout')

function Edit (props) {
    const { name, _id, shipIsBroken, color } = props.log

    return(
        <Layout log={props.log}>
            <h1>{name} Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="title" defaultValue={title} /><br/>
                Color: <input type="text" name="entry" defaultValue={entry}/><br/>
                Is Ship Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </Layout>
    )
}

module.exports = Edit




