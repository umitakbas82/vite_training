function Student (props){
  
    console.log(props)
return(
    <div>   
        <hr />
        <h5>Name:{props.name}</h5>
        <h5>Surname:{props.sur}</h5>
        <h5>Number:{props.num}</h5>
    </div>
)

}

export default Student