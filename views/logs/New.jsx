const React = require("react");
const Layout = require("../layout/Layout");

function New() {
  return (
    <Layout title="New Captain's Log">
      <h1>New Captain's Log</h1>
      <form action="/logs" method="POST">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />

        <label>
          Entry:
          <textarea name="entry" />
        </label>
        <br />

        <label>
          Ship is Broken:
          <input type="checkbox" name="shipIsBroken" />
        </label>
        <br />

        <input type="submit" value="Create Log" />
      </form>

      <a href="/logs">Back to Index</a>
    </Layout>
  );
}

module.exports = New;
