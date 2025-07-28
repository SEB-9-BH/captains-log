const React = require('react');
const Layout = require('./Layout');

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  padding: '20px',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #778da9',
  width: '300px',
};

const buttonStyle = {
  backgroundColor: '#f4a261',
  color: '#0d1b2a',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

function Edit(props) {
  const { title, _id, shipIsBroken, entry } = props.log;

  return (
    <Layout>
      <h2>Edit Log: {title}</h2>
      <form style={formStyle} action={`/logs/${_id}?_method=PUT`} method="POST">
        <label>Title:
          <input style={inputStyle} type="text" name="title" defaultValue={title} />
        </label>
        <label>Entry:
          <input style={inputStyle} type="text" name="entry" defaultValue={entry} />
        </label>
        <label>Is Ship Broken:
          <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken} />
        </label>
        <input style={buttonStyle} type="submit" value="Update Ship" />
      </form>
    </Layout>
  );
}

module.exports = Edit;
