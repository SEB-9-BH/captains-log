const React = require('react');

const Show = ({ log }) => {
  const formattedDate = log.createdAt ? log.createdAt.toLocaleDateString() : 'N/A'; // Format the date if available

  return (
    <div>
      <h1>{log.title}</h1>
      <p><strong>Entry:</strong> {log.entry}</p>
      <p><strong>Ship is Broken:</strong> {log.shipIsBroken ? 'Yes' : 'No'}</p>
      <p><strong>Created On:</strong> {formattedDate}</p> {/* Show created date if available */}
      <p>
        <a href="/logs">Back to All Logs</a> {/* Link back to the index page */}
      </p>
    </div>
  );
};

module.exports = Show;

