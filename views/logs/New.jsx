const React = require('react');

function New() {
  return (
    <html>
      <head>
        <title>New Log</title>
      </head>
      <body>
        <h1>Create New Log</h1>
        <form action="/logs" method="POST">
          <label>Title: <input type="text" name="title" required /></label><br />
          <label>Entry: <textarea name="entry"></textarea></label><br />
          <label>Ship Broken: <input type="checkbox" name="shipIsBroken" /></label><br />
          <input type="submit" value="Create Log" />
        </form>
        <a href="/logs">Back to Logs</a>
      </body>
    </html>
  );
}

module.exports = New;
