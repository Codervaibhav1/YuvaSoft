import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { userEdit, userRemove } from '../../features/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
const UserData = ({item}) => {
const dispatch = useDispatch()
const navigate = useNavigate()
    const {name , email ,gender, hobbies , status} = item || {}
const handleDelete =()=>{
    window.confirm('Are You Sure')
    dispatch(userRemove(item.id))
}
const handleEdit =()=>{
    navigate('/adduserform')
    dispatch(userEdit(item))
}

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{status}</td>
      <td>{gender}</td>
      <td>{hobbies}</td>
      <td className='d-flex align-item-center justify-content-start p-0'>
        <div className='p-0'>
            <button type="button" className='btn rounded-0 fs-5' onClick={()=>handleEdit(item)}><MdEdit/></button>
            <button type="button" className='btn rounded-0' onClick={()=>handleDelete(item.id)}><FaTrash/></button>
        </div>
      </td>
    </tr>
  )
}

export default UserData