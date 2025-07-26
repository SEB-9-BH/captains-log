const React = require('react');
const Layout = require('../layouts/Layout')

const styles = {
    container: {
      padding: '20px',
      fontFamily: 'sans-serif',
    },
    heading: {
      color: '#333',
    },
    input: {
      marginBottom: '10px',
      width: '100%',
    },
    textarea: {
      marginBottom: '10px',
      width: '100%',
    },
    submit: {
      padding: '5px 10px',
    },
  };


function New({log}) {
  return (
     <div style={styles.container}>
        <h1 style={styles.heading}>New Log</h1>
        <form action="/logs" method="POST">
          <label>Title:</label><br />
          <input type="text" name="title" style={styles.input} /><br />

          <label>Entry:</label><br />
          <textarea name="entry" rows="4" style={styles.textarea}></textarea><br />

          <label>
            <input type="checkbox" name="shipIsBroken" value="true" /> Ship is Broken?
          </label><br /><br />

          <input type="submit" value="Create Log" style={styles.submit} />
        </form>
      </div>
  );
}

module.exports = New;