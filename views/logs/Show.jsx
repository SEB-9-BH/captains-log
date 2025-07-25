const React = require('react')

function Show(props){
  const log = props.log

  // Format the createdAt and updatedAt dates nicely
  const createdDate = new Date(log.createdAt)
  const updatedDate = new Date(log.updatedAt)

  const formattedCreatedDate = createdDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const formattedUpdatedDate = updatedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const showUpdated = log.updatedAt !== log.createdAt;

  return (
    <div>
      <h1>{log.title}</h1>

      <a href="/logs">Go back to Captain's Log Index Page</a>

      <p><em>Created on: {formattedCreatedDate}</em></p>
      {showUpdated && <p><em>Last updated: {formattedUpdatedDate}</em></p>}

      <p>
        The {log.title} is {log.entry} and{' '}
        {log.shipIsBroken ? `it's Broken` : `it's not Broken`}.
      </p>

      <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
        <input type="submit" value={`Delete this ${log.title}`} />
      </form>

      <a href={`/logs/${log._id}/edit`}>
        <button>Edit this {log.title}</button>
      </a>
    </div>
  )
}

module.exports = Show
