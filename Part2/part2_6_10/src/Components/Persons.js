const Persons = ({ list }) => {
    return (
    <div>
            { list.map(x => (<h4 key={x.id}>{x.name} : {x.number} </h4>))}
    </div>
    )
}
export default Persons;