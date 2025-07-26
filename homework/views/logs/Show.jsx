const React = require('react')
const Layout = require('../layouts/Layout')
function Show(props){
    return(
        <Layout>
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go back to Index Page</a>
            <p>
                The {props.log.title} is with entry  {props.log.entry} and 
                {props.log.shipIsBroken? ' It is broken': ' It is not broken'}
            </p>
              <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.title}`}/>
            </form>
            <div>
            <a href={`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.title}`}</button></a>
            </div>
        </div>
        </Layout>
    )
}

module.exports = Show