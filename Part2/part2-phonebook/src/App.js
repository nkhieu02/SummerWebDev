import { useState, useEffect} from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import Noti from './Components/Noti' 
import PersonForm from './Components/PersonForm' // Used for 
import Book from './services/Book' //Holding method related to the server side

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newFilter, setNewFilter] = useState('');
  const [message, setMessage] = useState([null, null]); // first element of message is for success and second is for fail
  
//Get the data and set the error messsage for failing.
    useEffect(() => {
      Book.getAll().then(data => {
        setPersons(data)
        setMessage(["Data fetched all successfullly", null])
        setTimeout(() => {
          setMessage([null, null])
        }, 5000)

      }).catch(error => {
            setMessage(
              [null,"Get all Failed"]
            )
            setTimeout(() => {
              setMessage([null, null])
            }, 5000)
          });
        console.log("Data resolved")
    }, [])
  // Update the number
    const updateNumber = (personToUpdate) => {
        Book.update(personToUpdate).then(response => {
          setPersons(persons.map(person => person.id === personToUpdate.id ? response : person))
          setMessage(["Update succeeded", null])
          setTimeout(() => {
            setMessage([null, null])
          }, 5000)
        }).catch(error => {
            setMessage(
              [null, `Update failed`]
            )
            setTimeout(() => {
              setMessage([null, null])
            }, 5000)
          })
  }
  // Handle on adding and updating the number, inherit the method updateNumber
    const handleOnClick = (event) => {
        event.preventDefault();
        console.log("New guy incoming")
        console.log(newName);
        console.log(newNumber)
      const personTargeted = persons.find(x => x.name === newName);
      // If the person with the same name could not be found, return value is undefined, add new person, else update.
        if (typeof personTargeted === "undefined") {
            const personObject = { name: newName, number: newNumber };
            Book.create(personObject).then(data => {
                setPersons(persons.concat(data));
                setNewName('');           
                setNewNumber('');
              setMessage([`Add ${data.name} succeeded`, null])
              setTimeout(() => {
                setMessage([null, null])
              }, 5000)

            }).catch(error => {
                setMessage(
                  [null, "Add failed"]
                )
                setTimeout(() => {
                  setMessage([null, null])
                }, 5000)
              })
        }
        else {
            if (window.confirm(`${personTargeted.name} is already added to the phonebook, replace the old number with the new one ?`)) {
                const personUpdated = { ...personTargeted, number: newNumber };
                updateNumber(personUpdated);
            }
        }
  }
  // Update the name typed on input
    const handleOnChangeName = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setNewName(event.target.value);
        
  }
  // Update the number typed on input
    const handleOnChangeNum = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
  }
  // Filter the phonebook
    const handleOnChangeFilter = (event) => {
        const targetValue = event.target.value.toLowerCase();
        console.log(targetValue);
        setNewFilter(targetValue);
  }
  // This array used for rendering the PersonForm.
    const personFormValues = [{ id: 1, text: 'name', value: newName, method: handleOnChangeName },
    { id: 2, text: 'number', value: newNumber, method: handleOnChangeNum }]
  // Array passed to Persons comnponent for rendering.
    const personFiltered = persons.filter(x => (x.name.toLowerCase().substr(0, newFilter.length)) === newFilter);
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} method={handleOnChangeFilter} />
            <Noti message={ message} />
            <h2> add a new</h2>
            <PersonForm onSubmit={handleOnClick} values={personFormValues}/>
            <h2>Numbers</h2>
        <Persons list={personFiltered} onChangePerson={setPersons} onChangeError={ setMessage} />
        </div>
    )
}
export default App;