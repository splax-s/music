import React, { useState } from "react";
import styled from 'styled-components'
import HomeLink from '../Navbar/HomeLink'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "../firebase"
const DIV = styled.div`
    #head{
        margin: 0 auto;
        max-width: 85%;
        text-align: center;
        margin-top: 30px;
        font-size: 25px;
    }

    .form{
        margin: 0 auto;
        max-width: 60%;
        /* border: 1px solid white; */
        text-align: center;
    }
    form{
        margin: 0 auto;
        /* border: 1px solid white; */
        max-width: 70%;
        margin-bottom: 20px;
    }
    label{
        display: block;
        margin-top: 30px;
        margin-bottom: 5px;
        text-align: left;
    }
    input{
        margin: 0 auto;
        background-color: white;
        border: none;
        border-radius: 4px;
        color: black;
        padding: 5px;
        width: 100%;
    }
    button{
        padding: 10px;
        margin-top: 30px;
        border: 1px solid #db1ab1;
        border-radius: 20px;
        margin-right: 5px;
        transition: all linear 0.2s;
        cursor: pointer;
    }
    button:hover{
        border: 1px solid #db1ab1;
        background-color: #db1ab1;
        color: black;
        font-weight: 550;
    }
    p{
        margin-top: 10px;
        font-size: 14px;
    }
    #Link{
        text-decoration: none;
    }

`

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('User created')
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message));
    }
    return (
        <DIV className="signup">
            <HomeLink></HomeLink>
            <div className="form">
                <p id="head">Sign Up</p>
                <form>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <label>Confirm Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={register}>Submit</button>
                </form>
                <p>Already have an account? <Link id="Link" to="/LogIn"><span style={{ color: "#db1ab1" }}>Log In</span></Link></p>
            </div>
        </DIV>
    );
}
export default SignUp;