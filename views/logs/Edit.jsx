const React = require('react');

function Edit(props) {
  const { title, _id, shipIsBroken, entry } = props.log;

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

    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },

    label: {
      fontWeight: 'bold',
      color: '#313131ff',
    },

    input: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },

    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },

    submitButton: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#82a482d6',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '150px'
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title} Edit Page</h1>

      <form action={`/logs/${_id}?_method=PUT`} method="POST" style={styles.form}>
        <label style={styles.label}>Title:</label>
        <input type="text" name="title" defaultValue={title} style={styles.input} />

        <label style={styles.label}>Entry:</label>
        <input type="text" name="entry" defaultValue={entry} style={styles.input} />

        <div style={styles.checkboxContainer}>
          <label style={styles.label}>Is the Ship Broken?</label>
          <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken} />
        </div>

        <input type="submit" value="Update Log" style={styles.submitButton} />
      </form>

      <a style={styles.link} href="/logs">Go back to Index Page</a>
    </div>
  )
}

module.exports = Edit
