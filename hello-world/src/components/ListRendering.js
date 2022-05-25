import React from 'react'
import Person from './Person'
function ListRendering(){
    let names = ["edwin","virat","ajith"]
    let persons = [{name:"edie",age:21,location:"erode"},{name:"virat",age:33,location:"delhi"},{name:"ajith",age:50,location:"chennai"}]
    let nameList = names.map(name => <h1>{name}</h1>)
    let personsList = persons.map(person => <Person key={person.name} person={person} />)
        return(<div>
            {personsList}
            </div>)
}

export default ListRendering

/**Make react to assign every item as unique by providing key as unique field and we cant access that key in child componentn since it is reserved */