import React, { useEffect, useState } from "react";
import Details from "./Components/Details";
import Bank from "./Components/Bank";
import Bio from "./Components/Bio";
import Company from "./Components/Company";
import Account from "./Components/Account";
import Additonal from "./Components/Additonal";


let u = {};
export default function Profile(){

    let [user, setUser] = useState({});

    let id = localStorage.getItem("id");

    useEffect(() =>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    

    return (
        <div className="container-fluid">
            {
                
                user &&
                <div className="container ">
                    <Details user = {user} />
                    <Account user={user} />
                    <Company user={user} />
                    <Bank user={user}/>
                    <Bio user={user} />
                    <Additonal user={user} />
                </div> 
                
            }
        </div>
    )
}