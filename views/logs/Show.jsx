const React = require('react');

function Show(props) {
  const log = props.log;

  // Format the createdAt and updatedAt dates nicely
  const createdDate = new Date(log.createdAt);
  const updatedDate = new Date(log.updatedAt);

  const formattedCreatedDate = createdDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formattedUpdatedDate = updatedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const showUpdated = log.updatedAt !== log.createdAt;

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff1d0b7',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '1000px',
      margin: '30px auto',
    },
    heading: {
      textAlign: 'center',
      color: '#5f995fff',
      marginBottom: '25px',
    },
    link: {
      display: 'block',
      width: 'fit-content',
      margin: '20px auto 0',
      padding: '10px 15px',
      backgroundColor: '#5f995fd6',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      textAlign: 'center',
    },
dateText: {
  fontStyle: 'italic',
  color: '#555',
  marginBottom: '10px',
  backgroundColor: 'white',
  padding: '6px 10px',
  borderRadius: '6px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
},

paragraph: {
  fontSize: '18px',
  color: '#313131ff',
  marginBottom: '20px',
  backgroundColor: 'white',
  padding: '10px 15px',
  borderRadius: '6px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
},

    deleteForm: {
      display: 'inline',
      marginRight: '10px',
    },
    deleteButton: {
      padding: '10px 15px',
      backgroundColor: '#d9544fc5',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    editButton: {
      padding: '10px 15px',
      backgroundColor: '#82a482d6',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{log.title}</h1>

      <p style={styles.dateText}>Created on: {formattedCreatedDate}</p>
      {showUpdated && <p style={styles.dateText}>Last updated: {formattedUpdatedDate}</p>}

      <p style={styles.paragraph}>
        The {log.title} is {log.entry} and{' '}
        {log.shipIsBroken ? `it's Broken` : `it's not Broken`}.
      </p>

      <form action={`/logs/${log._id}?_method=DELETE`} method="POST" style={styles.deleteForm}>
        <input type="submit" value={`Delete this ${log.title}`} style={styles.deleteButton} />
      </form>

      <a href={`/logs/${log._id}/edit`}>
        <button style={styles.editButton}>Edit this {log.title}</button>
      </a>
      <br></br>
      <a href="/logs" style={styles.link}>Go back to Captain's Log Index Page</a>

    </div>
  );
}

module.exports = Show;
