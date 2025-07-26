const React = require('react');

function Edit({ log }) {
  return (
    <html>
      <head>
        <title>Edit {log.title}</title>
      </head>
      <body>
        <h1>Edit Log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <label>Title: 
            <input type="text" name="title" defaultValue={log.title} required />
          </label><br />
          <label>Entry: 
            <textarea name="entry" defaultValue={log.entry}></textarea>
          </label><br />
          <label>
            Ship Broken: 
            <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
          </label><br />
          <input type="submit" value="Update Log" />
        </form>
        <a href={`/logs/${log._id}`}>Cancel</a>
      </body>
    </html>
  );
}

module.exports = Edit;
