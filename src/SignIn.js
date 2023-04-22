import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


let error = false;
let obj = {};

export default function SignIn(){

    let [userName, setUserName] = useState('');
    let [pass, setPass] = useState('');
    // let [error, setError] = useState(false);

    let navigate = useNavigate();

    // function check(){
    //     if(userName.length === 0){
    //         alert("Please Enter your user name!")
    //         return false;
    //     }else if(!pass === 0){
    //         alert("Please Enter your password!")
    //         return false
    //     }

    //     return true;
        
    // }

    async function postReuqest(){

        // if(!check()){ return }

        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username:`${userName}`,
        password:`${pass}`,
        })
        })
        .then(res => {
            if(res.status === 200){
                error = false
            }else{
               error = true;
            } 
            return res.json();
        })
        .then(data => obj=data)
        .then(() =>{
            if(error === false){
                localStorage.setItem("id", obj.id)
                localStorage.setItem("token", obj.token)
                // console.log(localStorage.getItem("id"), localStorage.getItem("token"));
                navigate("/profile")
            }else{
                obj.message ? alert(obj.message) : alert("please enter you details!")
            }
        })
        .catch((e) =>{
            console.log(e, "error");
        }); 

    }


    return (
        <div className="main">
            {
                
            }
            <div className="card w-50 d-flex p-2">
                <h1>Signin</h1>
                    <input className="input-group mt-2 mb-2 p-2" type="text" name="user-name" placeholder="user name" onChange={(e) => setUserName(e.target.value)}/>
                    <div className="under-line"></div>
                    <input className="input-group mt-2 mb-3 p-2"  type="password" name="password" placeholder="password" onChange={(e) => setPass(e.target.value)}/>  
                    <div className="under-line"></div>  
                    <button className="btn rounded w-50 border bg-primary mt-2" onClick={() => postReuqest()}>Login</button>
            </div>
        </div>
        
    )
}