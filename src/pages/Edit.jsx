import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Addusers.css'

function Edit() {

    const history = useNavigate()
    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [number, setNumber] = useState('')
    const [course, setCourse] = useState('')
    
    // const hendleSubmit = (e) => {
    //     e.preventDefault()

    //     fetch(`http://localhost:3000/users`,{
    //         method: "POST",
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify({
    //             id: new Date().getTime(),
    //             name: name,
    //             surname: surname,
    //             age: age,
    //             number: number,
    //             course: course
    //         })
    //     })
    //     .catch(e => console.error(e))

    //     e.target[0].value = null
    // }


    const editData = (e, id) => {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id: new Date().getTime(),
                name: name,
                surname: surname,
                age: age,
                number: number,
                course: course
            })
        })
        .catch(e => console.error(e))

        e.target[0].value = null
    }
    
    return (
        <>

        <div className='add-user'>
            <h2 className='add-user__heading'>Edit users' data</h2>
            <form className='form' onSubmit={(e,id) => editData(id)}>
                 <div className='add-user__name'>
                     <label for="name">Enter name:</label>
                     <input className='add-user__input' required onChange={e => setName(e.target.value)}type="text" id="name" placeholder="Name"/>
                 </div>

                 <div className='add-user__name'>
                     <label for="surname">Enter surname:</label>
                     <input className='add-user__input' required onChange={e => setSurname(e.target.value)} type="text" id="surname" placeholder="Surname"/>
                 </div>

                 <div className='add-user__name'>
                     <label for="age">Enter age:</label>
                     <input className='add-user__input'required onChange={e => setAge(e.target.value)} type="number" id="age" placeholder="Age"/>
                 </div>

                 <div className='add-user__name'>
                     <label for="number">Enter phone number:</label>
                     <input className='add-user__input' required onChange={e => setNumber(e.target.value)} type="number" id="number" placeholder="Phone number"/>
                 </div>
                 <br/>

                 <select className="add-user__course" required onChange={e => setCourse(e.target.value)} name="sort course"> 
                    <option  defaultValue={"sort-course"}>Courses</option>
                    <option value="Web-Programming">Web programming</option>
                    <option value="Graphic-Design">Graphic Design</option>
                    <option value="Moution-Graphic">Moution Graphic</option>
                    <option value="SMM">SMM</option>
                </select>
                <button className='add-user__btn' type='submit'>Save</button>

            </form>
            <button onClick={e => history("/")}>Go Home</button>
        </div>
        </>
    )
}
export default Edit