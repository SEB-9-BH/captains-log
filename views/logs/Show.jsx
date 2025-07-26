const React =  require('react')
const DefaultLayout = require('../../layouts/Layout')

function Show(props) {
     const log = props.log
    return(
        // <DefaultLayout title='Log Show'>
        <div>
            <h1>{props.log.title}</h1>
            <a href= '/logs' >Go Back To Index Page</a>
                <p>
                    This is a {props.log.title} with an entry of {props.log.entry} and  {props.log.shipIsBroken? ' ship is breken': ' ship is not broken'}
                </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method='POST'>
            <input type='submit' value ={`Delete this ${props.log.title}`}></input>
            </form>
            
            <div>
                <a href = {`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.title}`}</button></a>
            </div>
        </div>
        // </DefaultLayout>
    )
}


module.exports = Show