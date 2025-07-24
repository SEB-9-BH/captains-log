const React = require('react');

function Show(props) {
    const  log  = props.log;
    return (
        <div>
            <h1>{log.title} Page</h1>
            <p>{`The book is about ${log.entry}`}</p>
            <p>{log.shipIsBroken ? "The ship is broken." : "The ship is not broken."}</p>
            <a href="/logs/new">Create another log</a>
        </div>
    );
}

module.exports = Show;
