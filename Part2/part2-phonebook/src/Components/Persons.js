import Book from '../services/Book'

const Persons = ({ list, onChangePerson, onChangeError }) => {
    return (
    <div>
            { list.map(x => (
                <div key={x.id}>
                    <h4 >{x.name} : {x.number} </h4>
                    <button onClick={
                        () => {
                            if (window.confirm(`Delete ${x.name}`)) {
                                Book.deleteObject(x.id).then(
                                    resolve => {
                                        onChangePerson([...list].filter(y => y.id !== x.id))
                                        onChangeError([`${x.name} deleted successfully`,null])
                                        setTimeout(() => {
                                            onChangeError([null, null])
                                          }, 5000)
                                    }
                                    
                                ).catch(error => {
                                    onChangeError(
                                        [null, "Update failed"]
                                      )
                                      setTimeout(() => {
                                        onChangeError([null, null])
                                      }, 5000)
                                });
                            }
                        }
                    }>
                        delete
                    </button>                    
                </div>                
            )
            )}
    </div>
    )
}

export default Persons;