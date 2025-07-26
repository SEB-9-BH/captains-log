const React= require("react")
const NewLayout= require("../layouts/NewLayout")

function New (props) 
{
    return(
        <NewLayout>
            <div>
                <h1>New Log </h1>
                
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title" /><br/>
                    Entry: <input type="text" name="entry" /><br/>
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                    <input type="submit" value="Add Log" />
                </form>
                
                <a href='/logs'>Go back to Index Page</a>
            </div>
        </NewLayout>
    )
}

module.exports= New