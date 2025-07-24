const React = require('react')

function Index (props){
    const logs = props.logs
    return (
        <div>
            <h1>Index Page</h1>
            <a href="/logs/new">Create a New Log</a>
            <ul>
                {
                   logs.map((log) => {
                    return (<li>This is the book of <a href={`/logs/${log.id}`}>{log.title}</a> with the entry of {log.entry}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports = Index