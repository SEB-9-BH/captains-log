const React = require('react');
const Layout = require('../layouts/Layout');

function Edit(props) {
    const { title, _id, shipIsBroken, entry } = props.log;

    return (
        <Layout log={props.log}>
            <div className="container edit-page">
                <h1 className="edit-title">{title} - Edit Page</h1>
                <a className="create-link" href="/logs">← Go back to Index Page</a>

                <form className="edit-form" action={`/logs/${_id}?_method=PUT`} method="POST">
                    <label className="form-label">
                        Title:<br />
                        <input className="form-input" type="text" name="title" defaultValue={title} required />
                    </label>
                    <br />

                    <label className="form-label">
                        Entry:<br />
                        <textarea className="form-textarea" name="entry" rows="5" required>{entry}</textarea>
                    </label>
                    <br />

                    <label className="checkbox-label">
                        <input className="form-checkbox" type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken} />
                        Ship is broken
                    </label>
                    <br />

                    <div className="log-actions">
                        <button className="btn edit" type="submit">Update Log</button>
                        <a href={`/logs/${_id}`}>
                            <button className="btn" type="button">Cancel</button>
                        </a>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

module.exports = Edit;