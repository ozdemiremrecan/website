import { useState,useEffect } from "react";
import useConnection from '../hooks/useConnection';
import useContract from '../hooks/useContract';
import loginjson from '../metadata/login.json';
import {loginAddress} from './config';

export default function Home() {
  const connection=useConnection();
  const contract=useContract(loginAddress,loginjson.abi);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [passwordAgain,setPasswordAgain]=useState("");
  const [people,setUsers]=useState([]);
  
  const addUser = async()=>{
    await contract.createUser(username,password);
  }
  const viewRegisteredUsers = async ()=>{
    const data=await contract.viewUsers();
    const users=await Promise.all(data.map(async i=>{
      let user={
        username:i.username,
        password:i.password
      }
      return user;
    }));
    setUsers(users);
  }
  useEffect(() => {
    connection.connect();
    if(connection.address){
      viewRegisteredUsers();
    }
  },[connection.address])
  return (
    <>
      <div className='form'>
        <h3>Register</h3>
        <label for="username">Username</label>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username"/>
        <label for="password">Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
        <label for="password2">Password Again </label>
        <input type="password" onChange={(e)=>setPasswordAgain(e.target.value)} placeholder="Enter your password"/>
        {
          password == passwordAgain ? <button onClick={addUser}>Register</button> : <div>
            
            
          </div>

        }
      </div>
    </>
  );
}