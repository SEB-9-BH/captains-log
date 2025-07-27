const React = require('react')

function Index (props){
    const logs = props.logs
    return (
        <div>
        <h1>Index page</h1>
        <ul>
        {
            logs.map((log) => {
                return (<li>this is the ship<a href={`/logs/${log.id}`}>{log.title}</a>and the entry is {log.entry}</li>)
            })
        }
        </ul>
        </div>
    )
}

module.exports = Index