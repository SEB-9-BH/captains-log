const React = require('react');

const New = () => {
  return (
    <div>
      <h1>Create a New Log</h1>
      <form action="/logs" method="POST">
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Entry:
          <textarea name="entry" required></textarea>
        </label>
        <br />
        <label>
          Ship is Broken:
          <input type="checkbox" name="shipIsBroken" value="true" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

module.exports = New;
