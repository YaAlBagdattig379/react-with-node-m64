import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    // fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  const handleAddUser = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name,email)
  }
  return (
    <div>
         <h1 className='text-center text-success'>Hello 'react with node m64'</h1>
         <h3>Total users : {users.length}</h3>
         <form onSubmit={handleAddUser}>
          <input type="text" name=""placeholder='name' id="" /> <br />
          <input type="text" name=""placeholder='email' id="" /> <br />
          <input type="submit" value="Add User" />
         </form>
         <ul className='justify-content-center'>
          { 
            users.map(user =><li className='border' key={user.id}>{user.id} <br /> {user.name} <br /> {user.email}</li>)
          }
         </ul>
         
    </div>
  );
}

export default App;
