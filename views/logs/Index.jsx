const React = require('react')

function Index(props){
    const logs=props.logs

    return (
    <div>
      <h1>Captain's Log Index</h1>
    
      <a href="/logs/new">Create New Log</a>
      <ul>

        {logs.map((log)=>(
          <li key={log._id}>
            This is the <a href={`/logs/${log._id}`}>{log.title}</a> of the entry {log.entry}
          </li>
        ))}
      </ul>
    </div>
  )
}

module.exports = Index