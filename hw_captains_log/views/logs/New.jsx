/*

const React = require('react')
const Layout = require('./layouts/Layout')

function Edit (props) {
    const { name, _id, expired, color } = props.fruit
    return(
        <Layout fruit={props.fruit}>
            <h1>{name} Edit Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Color: <input type="text" name="color" defaultValue={color}/><br/>
                Expired?: {expired? <input type="checkbox" name="expired" defaultChecked />: <input type='checkbox' name="expired"/>}<br/>
                <input type="submit" value="Update Fruit" />
            </form>
        </Layout>
    )
}

module.exports = Edit

const React = require('react')
const Layout = require('./layouts/Layout')



function Index (props){
    const fruits = props.fruits
    return (
        <Layout fruit={props.fruit}>
            <h1>My Fruits</h1>
            <ul>
                {
                fruits.map((fruit) => {
                    return (<li>This is the <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> of the color {fruit.color}</li>)
                   }) 
                }
            </ul>

            <a href={'/fruits/New'}><button style={styles}>Create New</button></a>
        </Layout>
    )
}

module.exports = Index

const React = require('react')
const Layout = require('./layouts/Layout')

const styles = {
    color:'red',
    cursor: 'pointer',
}

function Show(props){
    const fruit = props.fruit
    return(
        <Layout fruit={props.fruit}>
            <h1>{fruit.name} Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <p>The {fruit.name} is {fruit.color} {props.fruit.expired ? 'and is expired': 'and its ready to eat'}</p>
            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
            </form>
            <a href={`/fruits/${fruit._id}/edit`}><button >{`Edit this ${fruit.name}`}</button></a>
            <div>
            <input style={styles} type="submit" value={`Delete this ${fruit.name}`}/>
            </div>
        </Layout>
        
    )
}
module.exports = Show


const React = require('react')
const Layout = require('./layouts/Layout')

const styles = {
    cursor: 'pointer',
}

function New (props) {
    return(
        <Layout fruit={props.fruit}>
            <h1>New Fruit Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Expired?: <input type="checkbox" name="expired" /><br/>
                <input style={styles} type="submit" value="Create Fruit" />
            </form>
        </Layout>
    )
}

module.exports = New

*/