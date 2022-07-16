import Country from './Country';
import { useState } from 'react'

const Filter = ({ value, data }) => {
    const [shown, setShown] = useState([]);
    const dataFiltered = data.filter(x => (x.name.common.toLowerCase().substr(0, value.length) === value.toLowerCase()));
    console.log(dataFiltered);
    if (dataFiltered.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    if (dataFiltered.length === 1) {
        return (
            <Country country={dataFiltered[0]} />
        )
    }
    let key_id = 0;
    return (
        <>
        <div>
            {dataFiltered.map(x => {
                key_id += 1;
                if (shown.includes(x)) {
                    return (
                        < div key={key_id}>
                        <h3> {x.name.common}  </h3>
                            <button onClick={() => {
                                const newShown = shown.filter(y => y !== x);
                                setShown(newShown);
                         }
                        }>undo</button>
                        <Country country={x} />
                        </div>                      
                    )
                }
                return (
                    < div key={key_id}>
                        <h3> {x.name.common}  </h3>
                        <button onClick={() => {
                            setShown(shown.concat(x));
                         }
                        }>show</button>                      
                    </div>
                    
                )
            })}

            </div>            
        </>
    )
}

export default Filter;