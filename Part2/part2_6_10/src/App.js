import { useState } from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newFilter, setNewFilter] = useState('');
    const handleOnClick = (event) => {
        event.preventDefault();
        console.log("New guy incoming")
        console.log(newName);
        console.log(newNumber)
        const personObject = { name: newName, id: persons.length + 1, number: newNumber };
        if (typeof persons.find(x => x.name === newName) === "undefined") {
            setPersons(persons.concat(personObject));
            setNewName('');
            setNewNumber('')
        }
        else { alert(`${newName} is already added to phonebook`);}
    }
    const handleOnChangeName = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setNewName(event.target.value);
        
    }
    const handleOnChangeNum = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    }
    const handleOnChangeFilter = (event) => {
        const targetValue = event.target.value.toLowerCase();
        console.log(targetValue);
        setNewFilter(targetValue);
    }
    const personFormValues = [{ id: 1, text: 'name', value: newName, method: handleOnChangeName },
        { id: 2, text: 'number', value: newNumber, method: handleOnChangeNum }  ]
    const personFiltered = persons.filter(x => (x.name.toLowerCase().substr(0, newFilter.length)) === newFilter);
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} method={ handleOnChangeFilter} />
            <h2> add a new</h2>
            <PersonForm onSubmit={handleOnClick} values={personFormValues}/>
            <h2>Numbers</h2>
            <Persons list={ personFiltered} />
        </div>
    )
}
export default App;