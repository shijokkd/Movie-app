import React from 'react'
import AdminProduct from './AdminProduct'
import { Link } from 'react-router-dom'

function AdminPage() {
  return (
   
    <>
    <div className=' w-screen bg-blue-400 p-2 font-serif text-xl flex justify-around '>
        <div>logo</div>
        <div><input type="text" className='rounded-lg' /> <button>search</button></div>
        <div className=''>
            <ul className=' flex justify-around gap-8'><li><Link to={'/adminhome'}>home</Link></li><li><Link to={'/productadd'}>product add</Link></li><li>about</li><li><Link to={'/login'}>LogOut</Link></li></ul>
        </div>


    </div>
    <div className=' flex'>
        <div  className=' w-[20%] bg-slate-400  h-[94vh] ' ></div>
        <div className=' w-[80%]  '><AdminProduct/></div>
    </div>

    </>
  )
}

export default AdminPage
