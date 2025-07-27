const React = require('react');
const Layout = require('../Layout');

function Index({ logs }) {
  return (
    <Layout>
      <h1>Captain’s Log Index</h1>
      <ul>
        {logs.map((log, i) => (
          <li key={log._id}>
            <a href={`/logs/${log._id}`}>{log.title}</a>
            {' '}| <a href={`/logs/${log._id}/edit`}>Edit</a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST" className="inline-form">
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Index;
