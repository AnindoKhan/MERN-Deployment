import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
function Home(){
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
        .then(response =>setPets(response.data))
    }, [])
    return(
        <div>
            <Link to={"/pets/new"}> Add a Pet</Link>
        <h1>Pet Shelter</h1>
        <h3> These Pets are looking for a good home</h3>
        <table style= {{margin:"0 auto"}}>
            <thead>
                <th> Name</th>
                <th> Type</th>
                <th> Actions</th>
            </thead>
            <tbody>
                {pets.sort((a,b)=>a.type> b.type? 1:-1).map((pet, index) =>
                <tr>
                    <td key={index}> {pet.name}</td>
                    <td key={index}> {pet.type}</td>
                    <td> <Link to={'/pets/' + pet._id +'/edit'}> Edit </Link> <Link to ={"/pets/" + pet._id }> Details</Link></td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}
export default Home;