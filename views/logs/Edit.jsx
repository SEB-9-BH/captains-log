const React = require('react')

function Edit(props) {
  const { title, _id, shipIsBroken, entry } = props.log

  return (
    <div>
      <h1>{title} Edit Page</h1>
      <a href="/logs">Go back to Index Page</a>

      <form action={`/logs/${_id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={title} /><br />

        Entry: <input type="text" name="entry" defaultValue={entry} /><br />
        
        Is The Ship Broken:
        <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken} /><br />
        <input type="submit" value="Update log" />
      </form>

    </div>
  )
}

module.exports = Edit
