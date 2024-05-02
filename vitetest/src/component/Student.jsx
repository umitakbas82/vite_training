function Student ({name,sur,num,isClass}){

    const isHere=isClass ? `${name} ${sur} ${num}` : `${name } Not Here`;
    return(
        <h3>Name&Surname: {isHere}</h3>
    )
}

export default Student