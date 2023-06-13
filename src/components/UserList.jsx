import React from 'react'
import User from './User'
import Loading from './Loading'
import User2 from './User2'


const UserList = (props) => {
if(props.load){
    return <Loading/>
}
  return (
    <div>
      {
        props.users.map((user)=>(
        /*  <User user={user} key={user.id} />  */


    <User2 user={user} key={user.id} />
   





         
        ))
      }
    </div>

  )
}

export default UserList
