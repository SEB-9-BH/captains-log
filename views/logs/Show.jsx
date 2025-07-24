const React = require('react');

function Show(props) {
    const log = props.log;

    return (
        <html>
            <head>
                <title>Captain's Log - {log.title}</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container show-page">
                    <h1 className="show-title">{log.title}</h1>

                    <p className="show-entry"><strong>Entry:</strong> {log.entry}</p>

                    <p className="show-status">
                        <strong>Ship Status:</strong>{' '}
                        <span className={log.shipIsBroken ? 'status-broken' : 'status-ok'}>
                            {log.shipIsBroken ? 'The ship is broken.' : 'The ship is not broken.'}
                        </span>
                    </p>

                    <div className="log-actions">
                        <a href={`/logs/${log._id}/edit`}>
                            <button className="btn edit">Edit</button>
                        </a>
                        <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                            <button className="btn delete" type="submit">Delete</button>
                        </form>
                        <a href="/logs">
                            <button className="btn">Back to Index</button>
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}

module.exports = Show;