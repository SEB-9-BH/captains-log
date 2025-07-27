const React = require('react');
const Layout = require('../Layout');

function Edit({ log }) {
  return (
    <Layout>
      <h1>Edit Log</h1>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        <label>Title: <input type="text" name="title" defaultValue={log.title} /></label><br />
        <label>Entry:<br />
          <textarea name="entry" defaultValue={log.entry}></textarea>
        </label><br />
        <label>Ship is Broken:
          <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
        </label><br />
        <input type="submit" value="Update Log" />
      </form>
      <a href="/logs">Back to Index</a>
    </Layout>
  );
}

module.exports = Edit;
