import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form'

export default function Update() {
    const {userId} = useParams ();

    const {register, setValue, handleSubmit} = useForm();

    const navigate = useNavigate();
    
    async function fetchAllUsers (){
        const result =await axios.get (`http://localhost:8000/api/blog/${userId}/`);

        setValue("title", result.data.title);
        setValue("content", result.data.content);
        setValue("created_by", result.data.created_by);
        
    }

    const saveData = data =>{
        axios.put(`http://localhost:8000/api/blog/${userId}/`, data);
        navigate ('/user/show');
    }
    useEffect (( ) => {
        fetchAllUsers();

    },[])
  return (
    <>
        <div className='container'>
            <center><h1><u>User Updation Form</u></h1></center>
            <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='title'><b>Title:</b></label>
                <input type='text' id='title' className='form-control' {...register('title')}/>
                <br/>
                <br/>
                <label htmlFor='content'><b>Content:</b></label>
                <input type='text' id='content' className='form-control' {...register('content')}/>
                <br/>
                <br/>
                <label htmlFor='cr'><b>Created_by:</b></label>
                <input type='text' id='cr' className='form-control' {...register('created_by')}/>
                <br/>
                <br/>
                
                <input type='submit' value='Update' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>
        </div>
    
    </>
  )
}