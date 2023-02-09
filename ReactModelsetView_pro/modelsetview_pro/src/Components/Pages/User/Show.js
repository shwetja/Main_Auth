import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Show() {
    const [users, setUsers]=useState([]);

    async function fetchAllUsers(){
        const result = await axios.get('http://localhost:8000/api/blog/')
        setUsers (result.data);
    }
    useEffect (()=> {
        fetchAllUsers();
    }, [])
  return (
    <>
        <table className='table table-dark'>
            <thead>
                <tr>
                    
                    <th>Title:</th>
                    <th>Content:</th>
                    <th>Created_by:</th>
                    <th>Action:</th>

                </tr>
            </thead>
            <tbody >
                {
                    users.map(obj =>{
                        return(
                    <tr>
                        
                        <td>{obj.title}</td>
                        <td>{obj.content}</td>
                        <td>{obj.created_by}</td>
                        
                        <td>
                            <NavLink to={`/user/update/${obj.id}`} ><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                            <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-warning btn-sm'>DELETE</button></NavLink>
                            
                        </td>
                    </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </>
  )
}