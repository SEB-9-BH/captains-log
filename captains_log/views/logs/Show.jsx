const React = require('react');
const Layout = require('./Layout');

const pStyle = {
  fontSize: '1.2em',
  margin: '20px auto',
  width: '60%',
};

const buttonStyle = {
  backgroundColor: '#f4a261',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

function Show(props) {
  const { title, entry, shipIsBroken, _id } = props.log;
  return (
    <Layout>
      <h2>{title}</h2>
      <p style={pStyle}>
        {entry}<br/>
        Status: <strong>{shipIsBroken ? '🚨 Broken' : '✅ Operational'}</strong>
      </p>
      <form action={`/logs/${_id}?_method=DELETE`} method="POST">
        <input style={buttonStyle} type="submit" value={`Delete "${title}"`} />
      </form>
      <br />
      <a href={`/logs/${_id}/edit`}><button style={buttonStyle}>Edit This Log</button></a>
    </Layout>
  );
}

module.exports = Show;
