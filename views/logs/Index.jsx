const React = require('react');

const Index = ({ logs }) => {
  return (
    <div>
      <h1>All Logs</h1>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            <a href={`/logs/${log._id}`}>{log.title}</a> {/* Link to Show page */}
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
              <button type="submit">Delete</button>
            </form> {/* Delete form */}
            <a href={`/logs/${log._id}/edit`}>Edit</a> {/* Link to Edit page */}
          </li>
        ))}
      </ul>
      <p>
        <a href="/logs/new">Create New Log</a> {/* Link to create page */}
      </p>
    </div>
  );
};

module.exports = Index;



