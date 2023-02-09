import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Register() {
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const nav = useNavigate()
    const saveUser = async(userData) =>{
        const resp = await axios.post('http://127.0.0.1:8000/auth/register/', userData)
        if(resp.status === 201){
            nav('/user/login')
        }
    }
  return (
    <div>
        
        <center><h1><u>User Registeration Form</u></h1></center>
            <form onSubmit={handleSubmit(saveUser)}>
                <label htmlFor='title'><b>Username:</b></label>
                <input type='text' id='title' className='form-control' {...register('username',{
                    required:"This field is required"
                })}/>
                {errors.title && <span>This field is required</span>}
                <br/>
                <br/>
                <label htmlFor='content'><b>Password:</b></label>
                <input type='password' id='content' className='form-control' {...register('password', {required:"This Field is required"})}/>
                <br/>
                <br/>
                <label htmlFor='cr'><b>Email:</b></label>
                <input type='email' id='cr' className='form-control' {...register('email', {required:"this field is required"})}/>
                <br/>
                <br/>
                
                <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>

        
    </div>
  )
}

export default Register