import React, {useEffect, useState}from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router"
function ViewPet(props){
    const [pet, setPet]= useState({})
    const [pets,setPets]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/getPet/" + props.id)
        .then(response => setPet(response.data))
        .catch(error => console.log(error))
    }, [])
    function deletePet(petId){
        axios.delete("http://localhost:8000/api/delete/" +petId)
        .then(response => {
            console.log(response)
            setPets(pets.filter(thePet => pet._id != petId))
            navigate("/");
        })
    }

    return(
        <div>
            <Link to={"/"}> Back to Home</Link>
            <button onClick={()=> deletePet(pet._id)}> Adopt a Pet</button>
            <h1>Pet Shelter</h1>
            <h1>Details About:{pet.name}</h1>
            <h1> Pet Type:{pet.type}</h1>
            <h1> Description:{pet.description}</h1>
            <h1> Skills:</h1>
            <h1> {pet.skill1} </h1>
            <h1> {pet.skill2} </h1>
            <h1> {pet.skill3} </h1>
            
        </div>
    )
}
export default ViewPet;