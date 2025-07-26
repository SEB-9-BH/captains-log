const React = require("react");
const Layout = require("../layout/Layout"); 

function Show({ log }) {
  return (
    <Layout title={`Captain's Log: ${log.title}`}>
      <h1>Captain's Log: {log.title}</h1>
      <p><strong>Entry:</strong> {log.entry}</p>
      <p><strong>Status:</strong> Ship is {log.shipIsBroken ? "Broken" : "Fine"}</p>
      <p><strong>Created At:</strong> {new Date(log.createdAt).toLocaleString()}</p>
      <a href="/logs">Back to Index</a>
    </Layout>
  );
}

module.exports = Show;
