const React = require('react');

const containerStyle = {
  backgroundColor: '#f8f9fa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#333'
};

const h1Style = {
    
};

const paragraphStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  textAlign: 'center'
};

const button = {
  padding: '10px 20px',
  margin: '10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer'
};

const deleteButton = {
  ...button,
  backgroundColor: '#dc3545'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  marginBottom: '20px'
};

function Show(props) {
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>{props.log.name}</h1>

      <a href="/logs" style={linkStyle}>← Back to Logs</a>

      <p style={paragraphStyle}>
        The <strong>{props.log.name}</strong> is <strong>{props.log.color}</strong> and{' '}
        {props.log.shipIsBroken ? 'it is broken.' : 'it is not broken.'}
      </p>

      <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
        <input type="submit" value={`Delete ${props.log.name}`} style={deleteButton} />
      </form>

      <a href={`/logs/${props.log._id}/edit`}>
        <button style={button}>{`Edit ${props.log.name}`}</button>
      </a>
    </div>
  );
}

module.exports = Show;
