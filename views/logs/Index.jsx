const React =  require('react')
const DefaultLayout = require('../layouts/Layout')


function Index(props) {
        const logs = props.logs
    return(
         <DefaultLayout title='Logs Index'>
        <div>
            <h1>Index Page</h1>
            <ul>
                {
                    logs.map( (log => {
                        return(<li>This is the <a href={`/logs/${log._id}`}>{log.title}</a> of entry {log.entry} and {log.shipIsBroken? 'ship is broken': 'ship is not broken'}</li>)
                    }))
                }
            </ul>
        </div>
     </DefaultLayout>
    )
    
}


module.exports = Index