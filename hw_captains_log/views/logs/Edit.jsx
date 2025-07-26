const React = require('react');
const Layout = require('../layouts/Layout')

function Edit({ log }) {
  return (
     <Layout logging={log.log}>
      <h1>Edit Log</h1>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={log.title} /><br />
        Entry: <textarea name="entry">{log.entry}</textarea><br />
        Ship is Broken? <input type="checkbox" name="shipIsBroken" value="true" defaultChecked={log.shipIsBroken} /><br />
        <input type="submit" value="Update Log" />
      </form>
    </Layout>
  );
}

module.exports = Edit;