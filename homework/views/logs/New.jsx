const React = require('react');
const Layout = require('../Layout');

function New() {
  return (
    <Layout>
      <h1>New Captain’s Log Entry</h1>
      <form action="/logs" method="POST">
        <label>Title: <input type="text" name="title" /></label><br />
        <label>Entry:<br /><textarea name="entry"></textarea></label><br />
        <label>Ship is Broken: <input type="checkbox" name="shipIsBroken" /></label><br />
        <input type="submit" value="Create Log" />
      </form>
    </Layout>
  );
}

module.exports = New;
