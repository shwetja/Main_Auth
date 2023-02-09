import React from 'react'

function Success() {
    const token = sessionStorage.getItem('token')
    console.log(token)
  return (
    <div>Success
        {token}
    </div>

  )
}

export default Success