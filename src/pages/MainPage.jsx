import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './../App.css'



 function MainPage() {

    //search, sort alph and course hooks
    const [users, setUsers] = useState([])
    const [info, setInfo] = useState(users)
    const [searchInput, setSearchInput] = useState('')

    const [renderType, setRenderType] = useState("all")
    const [web, setWeb] = useState([])
    const [graphic, setGraphic] = useState([])
    const [moution, setMoution] = useState([])
    const [smm, setSmm] = useState([])

    const navigate = useNavigate()

    
    useEffect(()=> {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])
    
    ///search useeffect
    useEffect(() =>{
           setInfo((_) =>{
            let newData = users.filter(item => item.name.includes(searchInput))
            return newData
           })
    },[searchInput])


    //sort courses
    const sortCourses = (e) => {
        setRenderType(e.target.value)
        console.log(e.target.value);
        
        if (e.target.value == "Web-Programming"){
            const filteredUsers = users.filter(item => item.course == "Web-Programming")
            setWeb(filteredUsers)
        }else if (e.target.value == "Graphic-Design"){
            const filteredUsers = users.filter(item => item.course == "Graphic-Design")
            setGraphic(filteredUsers)
        }else if (e.target.value == "Moution-Graphic"){
            const filteredUsers = users.filter(item => item.course == "Moution-Graphic")
            setMoution(filteredUsers)
        }else if (e.target.value == "SMM"){
            const filteredUsers = users.filter(item => item.course == "SMM")
            setSmm(filteredUsers)
        }
    }

    //sort alphabet
    const sortAlph =(e)=> {
        if(e.target.value === "descending"){
            fetch(`http://localhost:3000/users?_sort=name&_order=desc`)
            .then((res)=> res.json())
            .then((data)=> setInfo(data))
        }else {
            fetch(`http://localhost:3000/users?_sort=name&_order=asc`)
            .then((res)=> res.json())
            .then((data)=> setInfo(data))
        }
    } 

    //delete
    const hendleDelete = (id) => {
            fetch(`http://localhost:3000/users/${id}`,{
            method: "DELETE"
        }).catch((e) => console.log(e))
    }


    ///update user
   const updateUser = (e) => {
       console.log(e.target);
       navigate('/edit')
   }

    return(
        <>
        
        <div className="main">
            <h1 className="main__heading">Grand education leads</h1>
            <div className="main__top">

                <input className="main__search" onChange={(e) => setSearchInput(e.target.value)} placeholder="Search users by name" />
                
                <select className="main__sort-alph"  onChange={(e) => sortAlph(e)}  name="sort alph" id="sort alph"> 
                    <option>Sort Alph</option>
                    <option value="ascending">A-z</option>
                    <option value="descending">Z-a</option>
                </select>

                <select className="main__sort-course"  onChange={(e)=> sortCourses(e)} name="sort course"> 
                    <option value="all">Sort by course</option>
                    <option value="Web-Programming">Web programming</option>
                    <option value="Graphic-Design">Graphic Design</option>
                    <option value="Moution-Graphic">Moution Graphic</option>
                    <option value="SMM">SMM</option>
                </select>

                <NavLink className={"main__add"} to='/addusers'>
                  <button>  Add users</button>
                </NavLink>
            </div>
            <div className="main__wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Phone Number</th>
                            <th>Manage users</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            renderType === "all" &&  info.map(u => {
                                 return (
                                    <tr key={u.id}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.age}</td>
                                        <td>{u.number}</td>
                                        <td>{u.course}</td>
                                        <button onClick={()=> hendleDelete(u.id)} className="delBtn">X</button>
                                        <button onClick={(e)=>  updateUser(e)}>Update</button>
                                    </tr>
                                )
                            })
                        }

                        {
                            renderType === "Web-Programming" &&  web.map(u => {
                                 return (
                                    <tr onDoubleClick={(e) => updateUser(e)}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.age}</td>
                                        <td>{u.number}</td>
                                        <td>{u.course}</td>
                                        <button onClick={()=> hendleDelete(u.id)} className="delBtn">X</button>
                                        <button onClick={(e)=>  updateUser(e)}>Update</button>
                                    </tr>
                                )
                            })

                        }

                        {
                            renderType === "Graphic-Design" &&  graphic.map(u => {
                                 return (
                                    <tr key={u.id} onDoubleClick={(e) => updateUser(e)}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.age}</td>
                                        <td>{u.number}</td>
                                        <td>{u.course}</td>
                                        <button onClick={()=> hendleDelete(u.id)} className="delBtn">X</button>
                                        <button onClick={(e)=>  updateUser(e)}>Update</button>
                                    </tr>
                                )
                            }) 
                            
                        }

                        
                        {
                            renderType === "Moution-Graphic" &&  moution.map(u => {
                                 return (
                                    <tr key={u.id} onDoubleClick={(e) => updateUser(e)}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.age}</td>
                                        <td>{u.number}</td>
                                        <button onClick={()=> hendleDelete(u.id)} className="delBtn">X</button>
                                        <button onClick={(e)=>  updateUser(e)}>Update</button>
                                    </tr>
                                )
                            }) 
                            
                        }

                        {
                            renderType === "SMM" &&  smm.map(u => {
                                 return (
                                    <tr key={u.id} onDoubleClick={(e) => updateUser(e)}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.age}</td>
                                        <td>{u.number}</td>
                                        <td>{u.course}</td>
                                        <button onClick={()=> hendleDelete(u.id)} className="delBtn">X</button>
                                        <button onClick={(e)=>  updateUser(e)}>Update</button>
                                    </tr>
                                )
                            }) 
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
 }
 export default MainPage