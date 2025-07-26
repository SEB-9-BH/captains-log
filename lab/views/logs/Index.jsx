const React= require("react")
const IndexLayout= require("../layouts/IndexLayout")

function Index (props)
{
    const logs= props.logs
    return (
        <IndexLayout>
            <h1>Log page</h1>
            <a href="/logs/new">add a log</a>
            <ul>
                {

                    logs.map(log=> {
                        return(
                        <div class="logSection">
                            <li>
                                <div>
                                    <p>Title:</p>
                                    <p class="title"> <a href={`/logs/${log.id}`}>{log.title}</a></p>
                                </div>
                                <div>
                                    <p>Entry: </p>
                            <p class="entry">{log.entry}</p>

                                </div>
                                <div>
                                    <p>Status:</p>
                                    {log.shipIsBroken===true?<p class="shipIsBroken">The Ship is broken</p>:<p class="shipIsNotBroken">The Ship is not broken</p>}
                                </div>
                            </li> 
                        </div>
                        )
                    })
                }
            </ul>

        </IndexLayout>

    )
}
module.exports= Index