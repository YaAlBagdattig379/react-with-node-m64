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
      const user = {name,email};
      // post data to server 
      fetch('http://localhost:5000/user',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
  }
  return (
    <div className='container'>
         <h1 className='text-center text-success'>Hello 'react with node m64'</h1>
         <h3>Total users : {users.length}</h3>

         <div className='text-center'>
           <form onSubmit={handleAddUser} className='mb-5'>
             <input type="text" name="name" placeholder='name' id="" required/> <br />
             <input type="email" name="email" placeholder='email' id="" required/> <br />
           <input type="submit" value="Add User" />
         </form>
         </div>
         
         <ul className='justify-content-center'>
          { 
            users.map(user =><li className='border' key={user.id}>{user.id} <br /> {user.name} <br /> {user.email}</li>)
          }
         </ul>
         
    </div>
  );
}

export default App;
