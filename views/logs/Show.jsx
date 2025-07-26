const React = require('react');

function Show({ log }) {
  return (
    <html>
      <head>
        <title>{log.title}</title>
      </head>
      <body>
        <h1>{log.title}</h1>
        <p>{log.entry}</p>
        <p>Ship Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>

        <a href="/logs">Back to Logs</a> | <a href={`/logs/${log._id}/edit`}>Edit</a>

        <form action={`/logs/${log._id}?_method=DELETE`} method="POST" style={{ marginTop: '10px' }}>
          <button type="submit">Delete</button>
        </form>
      </body>
    </html>
  );
}

module.exports = Show;
