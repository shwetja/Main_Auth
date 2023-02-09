import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const [token, setToken] = useState('')
    const nav = useNavigate()
    const loginUser = async (data) => {
        const resp = await axios.post('http://127.0.0.1:8000/token/', data)
        if(resp.status===200){
            console.log(resp.data)
            setToken(resp.data.token)
            sessionStorage.setItem('token', resp.data.token )
            nav('/user/success')
        }
        else{
            console.error('Invalid Credentials')
        }
    }

  return (
    <div>
        <center><h1><u>User Registeration Form</u></h1></center>
            <form onSubmit={handleSubmit(loginUser)}>
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
                
                <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>

            </form>

    </div>
  )
}

export default Login