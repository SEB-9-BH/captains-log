const React = require('react');

const Edit = ({ log }) => {
  return (
    <div>
      <h1>Edit Log</h1>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        <label>
          Title:
          <input type="text" name="title" defaultValue={log.title} required />
        </label>
        <br />
        <label>
          Entry:
          <textarea name="entry" defaultValue={log.entry} required></textarea>
        </label>
        <br />
        <label>
          Ship is Broken:
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultChecked={log.shipIsBroken}
          />
        </label>
        <br />
        <input type="submit" value="Update Log" />
      </form>
      <p>
        <a href={`/logs/${log._id}`}>Back to Log Details</a>
      </p>
    </div>
  );
};

module.exports = Edit;
