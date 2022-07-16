import Weather from './Weather';

const Country = ({ country }) => {
    const capital = country.capital; //Array
    const area = country.area;
    const languages = Object.values(country.languages);
    const name = country.name.common;
    const flag = country.flags.png;
    const lat = country.capitalInfo.latlng;
    let key_id = 0;
    return (
        <>
        <div>
            <h2>{name}</h2>
            <p>capital: {capital}</p>
            <p>area: {area}</p>
            <h3>languages</h3>
            <ul>
                {languages.map(x => {
                    key_id += 1;
                    return (<li key= {key_id}> {x}</li>)                   
                 })}
            </ul>
            <img src={flag} alt={ flag}/>
            </div>
            <div>
                <Weather latlng={lat} capital={ capital} />
            </div>
            
        </>
        
    )
}
export default Country;