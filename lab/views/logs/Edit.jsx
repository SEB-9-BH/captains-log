const React = require("react")
const EditLayout= require("../layouts/EditLayout")

function Edit (props)
{
    const {title,_id,shipIsBroken,entry}=props.log
    return(
        <EditLayout>

            <div class="panel">
                <h1>edit the log:{title}</h1>
                <div>
                <form action={`/logs/${_id}?_method=PUT`} method="POST">
                title:<input type="text" name="title" defaultValue={title} /> <br/>
                entry:<input type="text" name="entry" defaultValue={entry} /> <br/>
                Is the ship broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>

                <input type="submit" value="Update log" />

                </form>
                </div>
            </div>
        </EditLayout>
    )
}


module.exports= Edit