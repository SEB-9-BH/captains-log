const React = require('react')
const Layout = require('../layouts/Layout')

function Index (props){
    const logs = props.logs
    return (
        <Layout>
        <div>
            <h1>Index Page</h1>
            <ul>
                {
                   logs.map((log) => {
                    return (<li>This is the <a href={`/logs/${log.id}`}>{log.title}</a> of the entry {log.entry}</li>)
                   }) 
                }
            </ul>
        </div>
        </Layout>
    )
}

module.exports = Index