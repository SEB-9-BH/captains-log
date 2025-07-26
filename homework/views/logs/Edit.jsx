const React = require('react');
const Layout = require('../layouts/Layout.jsx');

const containerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '40px',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const h1Style = {
  backgroundColor: '#343a40',
  color: 'white',
  padding: '15px 30px',
  borderRadius: '6px',
  marginBottom: '30px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '100%'
};

const formStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '16px'
};

const inputStyle = {
  padding: '8px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const submitButton = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  marginBottom: '20px'
};

function Edit(props) {
  const { title, _id, shipIsBroken, entry } = props.log;

  return (
    <Layout log={props.log}>
      <div style={containerStyle}>
        <h1 style={h1Style}>{title} Edit Page</h1>
        <a href='/logs' style={linkStyle}>← Back to Index Page</a>

        <form action={`/logs/${_id}?_method=PUT`} method="POST" style={formStyle}>
          <label style={labelStyle}>
            Title:
            <input type="text" name="title" defaultValue={title} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Entry:
            <input type="text" name="entry" defaultValue={entry} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Is it broken:
            <input
              type="checkbox"
              name="shipIsBroken"
              defaultChecked={shipIsBroken}
            />
          </label>
          <input type="submit" value="Update Log" style={submitButton} />
        </form>
      </div>
    </Layout>
  );
}

module.exports = Edit;
