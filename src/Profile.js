import React, { useEffect, useState } from "react";
import Details from "./Components/Details";
import Bank from "./Components/Bank";
import Bio from "./Components/Bio";
import Company from "./Components/Company";
import Account from "./Components/Account";
import Additonal from "./Components/Additonal";


export default function Profile(){

    let [user, setUser] = useState({});

    let id = localStorage.getItem("id");

    useEffect(() =>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="container-fluid">
            {
                console.log(user)
            }
            { 
                Object.keys(user).length > 0 ? 
                <div className="container ">
                    <Details user ={user} />
                    <Account user={user} />
                    <Company user={user} />
                    <Bank user={user}/>
                    <Bio user={user} />
                    <Additonal user={user} />
                </div> 
                :
                <div className="loader">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            }
        </div>
    )
}