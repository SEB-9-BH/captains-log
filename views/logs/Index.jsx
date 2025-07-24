const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const logs = props.logs
    return (
        <Layout log={props.log}>
            <h1>Log Index Page</h1>
            <ul>
                {logs.map((log) => {
                    return (
                        <li>
                            <a href = {`/logs/${log.id}`}>{log.title}</a>: {log.entry}
                        </li>
                    )
                }
                )}
            </ul>
            <a href='/logs/new'>Add more logs</a>
        </Layout>
    )
}

module.exports = Index