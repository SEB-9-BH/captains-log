const React = require('react');

function Layout(props) {
  return (
    <html>
      <head>
        <title>Captain's Log</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <nav>
          <a href="/logs">Home</a> | <a href="/logs/new">New Log</a>
        </nav>
        <main>
          {props.children}
        </main>
      </body>
    </html>
  );
}

module.exports = Layout;
