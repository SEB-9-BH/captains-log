const React = require('react')

function Index(props){
    const logs=props.logs

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
      marginBottom:'25px'
    },

    link: {
      display: 'inline-block',
      margin: '10px 420px 5px', // top: 0, left/right: auto, bottom: 20px
      padding: '10px 15px',
      backgroundColor: '#5f995fd6',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',

    },

    list: {
      listStyleType: 'none',
      padding: 0,
    },

    listItem: {
      marginBottom: '12px',
      backgroundColor: '#fff',
      padding: '5px',
      borderRadius: '5px',
      color: '#313131ff', 
    },

    entryLink: {
      color: '#5f995fd6',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  }

    return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Captain's Log Index</h1>
          <ul>
        {logs.map((log)=>(
          <li style={styles.listItem}key={log._id}>
            This is the <a  style={styles.entryLink}href={`/logs/${log._id}`}>{log.title}</a> of the entry {log.entry}
          </li>
        ))}
      </ul>
            <a href="/logs/new" style={styles.link}>Create New Log</a>

    </div>
  )
}

module.exports = Index