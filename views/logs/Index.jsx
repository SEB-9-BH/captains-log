const React = require("react");
const Layout = require("../Layouts/Layout");

function Index (props) {
    const logs = props.logs;
    return (
        <Layout title="Captain's Logs">
        <div>
            <h1>Index Page</h1>
            <ul>
                {
                    logs.map((log) => {
                        return (<li>This is the <a href={`/logs/${log.id}`}>{log.title}</a> with entry {log.entry} which is {log.shipIsBroken === true ? "broken" : "not broken"}</li>)
                    })
                }
            </ul>
        </div>
        </Layout>
    )
};

module.exports = Index;