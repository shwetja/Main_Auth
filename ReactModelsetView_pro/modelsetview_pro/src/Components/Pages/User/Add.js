import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const {register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    async function saveData(data){
        await axios.post('http://localhost:8000/api/blog/', data);
        navigate ('/user/show')
    }
  return (
    <>
        <div className='container'>
            <center><h1><u>User Registeration Form</u></h1></center>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='title'><b>Title:</b></label>
                <input type='text' id='title' className='form-control' {...register('title',{
                    required:"This field is required"
                })}/>
                {errors.title && <span>This field is required</span>}
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
                
                <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>
        </div>
    
    </>
  )
}