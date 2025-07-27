const React = require('react');
const Layout = require('../layout');

function Show({ log }) {
  return (
    <Layout>
      <h1>{log.title}</h1>
      <p><strong>Entry:</strong> {log.entry}</p>
      <p><strong>Ship Status:</strong> {log.shipIsBroken ? 'Broken' : 'Working'}</p>
      {log.createdAt && (
        <p><strong>Created:</strong> {new Date(log.createdAt).toLocaleString()}</p>
      )}
      <a href="/logs">Back to Index</a>
    </Layout>
  );
}

module.exports = Show;
