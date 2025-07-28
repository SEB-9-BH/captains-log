const React = require('react');

const layoutStyles = {
  fontFamily: "'Courier New', Courier, monospace",
  backgroundColor: '#0d1b2a',
  color: '#e0e1dd',
  minHeight: '100vh',
  padding: '20px',
  textAlign: 'center',
};

const linkStyle = {
  color: '#f4a261',
  textDecoration: 'none',
  fontWeight: 'bold',
};

function Layout(props) {
  return (
    <div style={layoutStyles}>
      <h1>🧭 Captain's Log</h1>
      {props.children}
      <br />
      <a style={linkStyle} href="/logs">🏠 Return to Log Index</a>
    </div>
  );
}

module.exports = Layout;
