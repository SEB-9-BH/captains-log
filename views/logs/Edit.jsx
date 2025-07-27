const React =  require('react')
const DefaultLayout = require('../layouts/Layout')


function Edit(props) {
    const { title, _id, entry, shipIsBroken } = props.log
    return(
        <DefaultLayout title='Edit Log'>
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go Back To Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`}method="POST">
        Title: <input type='text' name='title' defaultValue={title}/><br/>
        Entry: <input type='text' name='entry' defaultValue={entry}/><br/>
       Is Ship Broken: <input type='checkbox' name='shipIsBroken' defaultChecked={shipIsBroken} />
        <br/>
                <input type='submit' value='Update Log' />
            </form>
        </div>
         </DefaultLayout>
    )
}

module.exports = Edit