const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props){
    return(
        <Layout log={props.log}>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go back to Index Page</a>
            <p>
                {props.log.title}: {props.log.entry} and {props.log.shipLsBroken? 'It is broken': 'It is not broken'}
            </p>
              <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" class ="sub" value={`Delete this ${props.log.title}`}/>
            </form>
            <div>
            <a href={`/logs/${props.log._id}/edit`}><button class="sub">{`Edit this ${props.log.title}`}</button></a>
            </div>
        </Layout>
    )
}

module.exports = Show