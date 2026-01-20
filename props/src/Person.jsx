function Person(props)
{
    return(
        <>
            <h1> name :  {props.name}</h1>
            <p>Age : {props.age}</p>
            <h5>Gender : {props.gender}</h5>
        </>
    )
}
export default Person;