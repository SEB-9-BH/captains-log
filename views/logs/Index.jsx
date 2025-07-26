const React = require('react');
const Layout = require('../layout/Layout.jsx'); 

function Index({ logs }) {
  return (
    <Layout title="All Logs">
      <h2>All Logs</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            <a href={`/logs/${log._id}`}>{log.title}</a>{" "}
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST" className="inline-form" style={{ display: 'inline' }}><br></br>
              <button type="submit">Delete</button><br></br>
            </form>{" "}
            <a href={`/logs/${log._id}/edit`}>Edit</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Index;
