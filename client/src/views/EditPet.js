import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";
function EditPet(props){
    const [name, setName]= useState('');
    const [type, setType]= useState('');
    const [description, setDescription]= useState('');
    const [skill1, setSkill1]= useState('');
    const [skill2, setSkill2]= useState('');
    const [skill3, setSkill3]= useState('');
    // const [loaded, setLoaded]= useState(false)
    const [errors, setErrors] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/getPet/" + props.id)
        .then (response => {
            setName(response.data.name);
            setType(response.data.type);
            setDescription(response.data.description);
            setSkill1(response.data.skill1);
            setSkill2(response.data.skill2);
            setSkill3(response.data.skill3);
        })
    },[])
    function editPet(e){
        e.preventDefault();
        axios.put("http://localhost:8000/api/edit/" +props.id,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(response => {
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
    return(
        <div>
            <Link to={"/"}> Back to Home</Link>
            <h1> Pet Shelter</h1>
            <h1> Edit: </h1>
            <form onSubmit={(e)=>editPet(e)}>
            <label>Pet Name</label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Pet type</label>
            <input type="text" name="type" value={type} onChange={(e)=>setType(e.target.value)}/>
            <label>Pet Description</label>
            <input type="text"  name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <p> Skills(Optional)</p>
            <label>Skill One</label>
            <input type="text"  name="skill1" value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
            <label>Skill two</label>
            <input type="text"  name="skill2" value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
            <label>Skill three</label>
            <input type="text"  name="skill3"value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
            <button> Submit</button>
        </form>
        {errors.map((error,idx)=>
            <p key={idx} style={{color:"red"}}> {error}</p>
            )}
        </div>
    )
}
export default EditPet;