import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function Delete() {
    const {userId} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    async function fetchAllUser (){
        const result = await axios.get(`http://localhost:8000/api/blog/${userId}`);
        setUser(result.data);

        }

        function deleteUser(){
            axios.delete(`http://localhost:8000/api/blog/${userId}`);
            navigate ("/user/show");
        }
        useEffect(()=>{
            fetchAllUser();
        }, [])
    
  return (
    <>
        <div className='container'>
            <center><u><h1>Delete Person Info</h1></u>
            <form onSubmit={()=> deleteUser()} className = 'mt-5'>
                <h3>Do you really want to Delete <span style={{color:"red"}}>{user.title} {user.content} {user.created_by}</span></h3>
                <input type="submit" value='Yes' className='btn btn-outline-danger col-3 mt-4' />

                <NavLink to='/user/show'><input type='button' value='No' className='btn btn-outline-warining col-3 mt-4' /></NavLink>

            </form>
            </center>
        </div>
    </>
  )
}