import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  {fetchUsers}  from '../redux/actions'

const UserComponent = () => {
  const data = useSelector((state)=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  console.log("heyhyehy",data.users)
  return (
    <>
    <div>User List</div>
    {data.loading ? <h1>Fetching users...</h1> : (
    data.errors ? <h4>Opps - {data.errors}</h4> : 
    data.users.map((elem)=>{
      return (<div><h3>{elem.name}</h3></div>)
    })
    )
  }
  </>
  )
}

export default UserComponent