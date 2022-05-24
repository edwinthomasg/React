import React from 'react'
import Person from './Person'
function ListRendering(){
    let names = ["edwin","virat","ajith"]
    let persons = [{name:"edwin",age:21,location:"erode"},{name:"virat",age:33,location:"delhi"},{name:"ajith",age:50,location:"chennai"}]
    let nameList = names.map(name => <h1>{name}</h1>)
    let personsList = persons.map(person => <Person person={person} />)
        return(<div>
            {personsList}
            </div>)
}

export default ListRendering