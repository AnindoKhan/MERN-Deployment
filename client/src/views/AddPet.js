import React, {useState} from 'react';
import axios from "axios";
import {Link, navigate} from "@reach/router"
function AddPet(){
    const [name, setName]= useState('');
    const [type, setType]= useState('');
    const [description, setDescription]= useState('');
    const [skill1, setSkill1]= useState('');
    const [skill2, setSkill2]= useState('');
    const [skill3, setSkill3]= useState('');
    const [errors, setErrors] = useState([]);
    function createPet (e){
        e.preventDefault();
        axios.post("http://localhost:8000/api/newPet",{
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        })
        .then( response => {
            console.log(response);
            navigate('/');
        })
        .catch(error => {
            const errorResponse = error.response.data.errors;
            const errorArr =[];
            for (const key in errorResponse){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
        <Link to={"/"}> Back to Home</Link>
        <h1>Pet Shelter</h1>
        <h3> Know a pet needing a home?</h3>
        <form onSubmit={createPet}>
            <label>Pet Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Pet type</label>
            <input type="text" value={type} onChange={(e)=>setType(e.target.value)}/>
            <label>Pet Description</label>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <p> Skills(Optional)</p>
            <label>Skill One</label>
            <input type="text" value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
            <label>Skill two</label>
            <input type="text" value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
            <label>Skill three</label>
            <input type="text" value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
            <button> Submit</button>
        </form>
        {errors.map((error, index)=>
        <p key={index} style={{color:"red"}}> {error}</p>
        )}
        </div>
    )
}
export default AddPet;