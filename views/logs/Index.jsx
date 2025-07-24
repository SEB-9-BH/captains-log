const React = require('react');

function Index(props) {
    const logs = props.logs;

    return (
        <html>
            <head>
                <title>Captain's Log - Index</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container">
                    <h1>Captain's Log Index</h1>

                    <a className="create-link" href="/logs/new">+ Create a New Log</a>

                    <ul className="log-list">
                        {
                            logs.map((log) => (
                                <li className="log-item" key={log._id}>
                                    <div className="log-content">
                                        This is the book of <a className="log-title" href={`/logs/${log._id}`}>{log.title}</a> with the entry of "{log.entry}"
                                    </div>

                                    <div className="log-actions">
                                        <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                            <button className="btn delete" type="submit">Delete</button>
                                        </form>

                                        <a href={`/logs/${log._id}/edit`}>
                                            <button className="btn edit" type="button">Edit</button>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </body>
        </html>
    );
}

module.exports = Index;
