const React = require('react');

const containerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '40px',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#333'
};

const h1Style = {
  backgroundColor: '#343a40',
  color: 'white',
  padding: '15px 30px',
  borderRadius: '6px',
  marginBottom: '30px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const listItemStyle = {
  backgroundColor: 'white',
  padding: '15px',
  marginBottom: '10px',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  fontSize: '18px'
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold'
};

function Index(props) {
  const logs = props.logs;

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Index Page</h1>
      <ul style={listStyle}>
        {
          logs.map((log) => (
            <li key={log.id} style={listItemStyle}>
              This is the <a href={`/logs/${log.id}`} style={linkStyle}>{log.title}</a> — {log.entry}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

module.exports = Index;
