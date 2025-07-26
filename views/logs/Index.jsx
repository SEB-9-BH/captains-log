const React = require('react');

function Index({ logs }) {
  return (
    <html>
      <head>
        <title>Captain's Logs</title>
      </head>
      <body>
        <h1>Captain's Logs</h1>
        <a href="/logs/new">Create New Log</a>
        <ul>
          {logs.map(log => (
            <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
}

module.exports = Index;
