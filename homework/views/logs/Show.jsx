const React = require('react');

const styles ={
    backgroundColor: 'red',
    display: 'flex',
    color: 'ghostwhite',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}


const h1Styles ={
    backgroundColor: 'black',
    color: 'ghostwhite',
    textAlign: 'center'
}



function Show(props) {
    return (
        <div style={styles}>
            <h1 style= {h1Styles}>{props.log.name}</h1>
            <a href='/logs'>Go back to Index Page</a>




            <p>
                The {props.log.title} is {props.log.entry} and 
                {props.log.shipIsBroken ? ' Ship is broken' : ' ship is not broken'}
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.name}`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}>
                    <button>{`Edit this ${props.log.name}`}</button>
                </a>
            </div>
        </div>
    );
}

module.exports = Show;