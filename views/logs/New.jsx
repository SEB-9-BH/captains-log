const React = require('react')

function New() {
  
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
      <h1 style={styles.heading}>New Log Page</h1>

      <form action="/logs" method="POST" style={styles.form}>
        <label style={styles.label} htmlFor="title">Title:</label>
        <input style={styles.input} type="text" name="title" id="title" />

        <label style={styles.label} htmlFor="entry">Entry:</label>
        <input style={styles.input} name="entry" id="entry" />

        <div style={styles.checkboxContainer}>
          <label htmlFor="shipIsBroken" style={styles.label}>Ship is Broken</label>
          <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />
        </div>

        <input style={styles.submitButton} type="submit" value="Create Log" />
      </form>

      <a style={styles.link} href="/logs">Go back to Caption Log Index Page</a>

    </div>
  )
}

module.exports = New
