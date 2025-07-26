const React = require('react');
const Layout = require('../layouts/Layout')

function Index({ logs }) {
  return (
    <Layout log={logs.log}>
      <h1>Logs Index</h1>
      <a href="/logs/new">Create New Log</a>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            <a href={`/logs/${log._id}`}>{log.title}</a>
            {' '}|{' '}
            <a href={`/logs/${log._id}/edit`}>Edit</a>
            {' '}
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Index;