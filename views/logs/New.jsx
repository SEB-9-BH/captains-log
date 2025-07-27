const React = require("react");
const Layout = require("../Layouts/Layout");

function New (props) {
    return (
        <Layout title="Add New Log">
        <div>
            <h1>Add New Log</h1>
            <a href="/logs">Back to Logs Page</a>
            <form action="/logs" method="POST">
            Title: <input type="text" name="title" /> 
            <br />
            Entry: <input type="text" name="entry" />
            <br />
            Ship Is Broken: <input type="checkbox" name="shipIsBroken" value="true" />
            <input type="submit" value="Create Log" />
            </form>
        </div>
        </Layout>
    )
};

module.exports = New;