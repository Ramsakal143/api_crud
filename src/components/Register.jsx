import React, { useEffect, useState } from 'react';

const Register = () => {
    var [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState(null)
    useEffect(() => {
        show()
    }, [])
    function show() {
        const url = 'https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student/';
        const promise = fetch(url)
        promise.then((res) =>
            res.json()
        ).then((data) =>
            setUser(data)
        ).catch((err) =>
            console.log(err)
        )
    }


    console.log(user)
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <table className='table text-center'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>MOBILE</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((data, index) => {
                                    return (
                                        <>
                                            <tr key={id}>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.age}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td><button onClick={() => allEdit(data.id)}>edit</button></td>
                                                <td><button onClick={() => allDelete(data.id)}>delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-md-6' style={{ margin: "0px auto" }}>
                    <input type='text' value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} className='form-control' required /><br />
                    <input type='number' value={age} placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} minLength='2' maxLength='2' className='form-control' required /><br />
                    <input type='email' value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} className='form-control' required /><br />
                    <input type='text' value={phone} placeholder='Enter your phone' onChange={(e) => setPhone(e.target.value)} className='form-control' required /><br />
                    <input type='password' value={password} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} className='form-control' required /><br />
                    <input type='button' value="update" onClick={updataData} className='btn btn-info text-white fw-bold' />
                </div>

            </div>

        </div>
    )

    function allDelete(id) {
        const url = 'https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student/' + id;
        const promise = fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        promise.then((res) =>
            res.json()
        ).then((data) =>
            window.location.reload()
        ).catch((err) =>
            console.log(err)
        )
    }
    function allEdit(id) {
        const item = user[id - 1]
        setName(item.name)
        setAge(item.age)
        setEmail(item.email)
        setPhone(item.phone)
        setPassword(item.password)
        setId(item.id)

    }
    function updataData() {
        const item = { name, email, age, phone, password, id }
        const url = 'https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student/' + id;
        const promise = fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(item)
        })
        promise.then((res) =>
            res.json()
        ).then((data) =>
            window.location.reload()
        ).catch((err) =>
            console.log(err)
        )
    }
}

export default Register
