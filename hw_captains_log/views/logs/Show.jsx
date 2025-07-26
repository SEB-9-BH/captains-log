const React = require('react');

const styles = {
    container: {
      padding: '20px',
      fontFamily: 'sans-serif',
    },
    heading: {
      color: '#2c3e50',
    },
    date: {
      color: 'gray',
      fontSize: '0.9em',
    },
    link: {
      color: '#0066cc',
    },
  };

function Show({log}) {
  return (
    <div style={styles.container}>
        <h1 style={styles.heading}>{log.title}</h1>
        <p>{log.entry}</p>
        <p>Ship is {log.shipIsBroken ? 'Broken' : 'Operational'}</p>
        <p style={styles.date}>Created at: {log.createdAt.toLocaleString()}</p>
        <a href="/logs" style={styles.link}>Back to Index</a>
      </div>
  );
}

module.exports = Show;