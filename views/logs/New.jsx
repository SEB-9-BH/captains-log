const React =  require('react')
const DefaultLayout = require('../layouts/Layout')


function New(props) {
    return(
        <DefaultLayout title='New Log'>
        <div>
            <a href='/logs'>Go Back To Index Page</a>
            <form action='/logs' method='POST'>
        Title: <input type='text' name='title' /><br/> 
        Entry: <input type='text' name='entry'/><br/>
        Is Ship Broken: <input type='checkbox' name='shipIsBroken' /><br/>
        <input type='submit' value='Create Log '/>  
            </form>
        </div>
     </DefaultLayout>    
)
}


module.exports = New