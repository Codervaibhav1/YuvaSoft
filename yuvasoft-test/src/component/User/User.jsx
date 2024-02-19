import React from 'react'
import UserData from './UserData';
import { useSelector } from 'react-redux';
const User = () => {

    const {User} = useSelector((state)=>state.User)
  return (
       <div className='d-flex flex-column w-100 align-items-center'>
        <h3 className='p-3'>User Data</h3>
         <table className="table table-striped w-75">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">Gander</th>
      <th scope="col">Hobbies</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        User && User.map((item) => <UserData key={item.id} item={item}/>)
    }
    </tbody>
</table>
       </div>
  )
}

export default User