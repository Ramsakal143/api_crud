import React, { useState } from 'react'
import { json } from 'react-router-dom'

const StudentShow = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSave=()=>{
        console.log(name,age,phone,email,password)
        const allData={name,age,phone,email,password}
        const url='https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student/'
        const promise=fetch(url,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(allData)
        })
        promise.then((res)=>{
            res.json()
        }).then((data)=>{
            console.log(data)
            setName('');
            setAge('');
            setPhone('');
            setEmail('');
            setPassword('');
            window.location.href='http://localhost:3000/show';
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='container mt-5'>
        <div className='row '>
            <div className='col-6' style={{margin:"0px auto"}}>
                <input type='text' value={name} placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)} className='form-control' required /><br/>
                <input type='number' value={age} placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} minLength='2' maxLength='2' className='form-control' required /><br/>
                <input type='email' value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} className='form-control' required/><br/>
                <input type='text' value={phone}  placeholder='Enter your phone' onChange={(e)=>setPhone(e.target.value)} className='form-control' required/><br/>
                <input type='password' value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} className='form-control' required/><br/>
                <input type='button' value="submit" onClick={onSave} className='btn btn-info text-white fw-bold' />
            </div>
        </div>
      
    </div>
  )
}

export default StudentShow
