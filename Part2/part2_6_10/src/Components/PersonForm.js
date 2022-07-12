const PersonForm = ({ onSubmit, values }) => {
    return(
    <form onSubmit={onSubmit}>
        {values.map(x => (
            <div key={x.id } >
                {x.text}: <input value={x.value} onChange={ x.method}/>
            </div>
        ))}
        <div>
            <button type="submit"> add </button>
        </div>
        </form>
    )
}
export default PersonForm;
