const React = require('react');
const Layout = require('./Layout');

const ulStyle = {
  listStyle: 'none',
  padding: 0,
};

const liStyle = {
  marginBottom: '10px',
  backgroundColor: '#1b263b',
  padding: '10px',
  borderRadius: '5px',
};

const linkStyle = {
  color: '#f4a261',
  textDecoration: 'none',
  fontWeight: 'bold',
};

function Index(props) {
  const logs = props.logs || []; // prevent 'undefined.map' error

  return (
    <Layout>
      <h2>All Logs</h2>
      <ul style={ulStyle}>
        {logs.map((log) => (
          <li key={log._id} style={liStyle}>
            This is the <a style={linkStyle} href={`/logs/${log._id}`}>{log.title}</a> of the entry "{log.entry}"
          </li>
        ))}
      </ul>
      <a href="/logs/new">
        <button style={{...linkStyle, backgroundColor: '#f4a261', padding: '10px 20px', borderRadius: '5px'}}>
          Create New Log
        </button>
      </a>
    </Layout>
  );
}

module.exports = Index;
