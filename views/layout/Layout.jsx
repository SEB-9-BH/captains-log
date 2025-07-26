const React = require('react');

function Layout(props) {
  const pageTitle = props.title || "Captain's Log";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <h1><a href="/logs">Captain's Log</a></h1>
          <nav>
            <a href="/logs/new">New Entry</a>
          </nav>
        </header>

        <main>
          {props.children}
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Thousand Sunny</p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
