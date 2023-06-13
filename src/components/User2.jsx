import React from 'react'
import './user2.css'

const User2 = (props) => {
    const {avatar_url,login,html_url} = props.user
  return (

  
    <div className="body">

    <div class="card2">
        <div class="imgBx">
            <img src={ avatar_url } alt={login } />
        </div>
        <div class="content">
            <div class="details">
                <h2>{login } <br /><span>If you want to go githup profile, click to button</span></h2>
               
              
                <div class="actionBtn">
                    <button className='btn btn-lg  btn-primary '>
                <a target="_blank" rel="noreferrer"  href={html_url} style={{color:"white"}} >Github Profile</a>

                    </button>
                   
                </div>
            </div>
        </div>
    </div>
    </div>



        

 








  )
}

export default User2
