const React= require("react")
const ShowLayout= require("../layouts/ShowLayout")

function Show (props)
{
    return(
        <ShowLayout>
            <div class="panel">
                <h1>Log Title:{props.log.title}</h1>
                <div>
                <p>{props.log.entry}</p>
                <p>{props.log.shipIsBroken? `The Ship is broken`:`The Ship is not broken`}</p>
                </div>
                <div>
                <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST" >
                <button type="submit">Delete this log</button>
                </form>
                <a href={`/logs/${props.log.id}/edit`}><button> Edit this log.</button></a>
                </div>
                <a href="/logs">Go back to the index page.</a>
            </div>
        </ShowLayout>
    )
}


module.exports=Show