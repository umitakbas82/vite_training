
import './App.css'
import Student from './component/Student'
function App() {
 
  const student={
    name:"John",
    sur:"Doe",
    num:123
  }

  return (
    <>
    <h4>Student List</h4>
    <hr />
    <Student data={student}/>
    <Student name="John" sur="Doe" num={123} isClass={true}/>
    <Student name="Jane" sur="Doe" num={124}  isClass={false}/>
    <Student name="Homer" sur="Doe" num={125} isClass={true}/>
    </>
   
  )
}

export default App
