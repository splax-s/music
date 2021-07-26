import artist from './images/artist.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from "react"
import { auth } from "./firebase"

const DIV = styled.div`
    .artist-div{
        text-align: center;
        margin-top: 80px;
    }
    #artist{
        border-radius: 1000px;
        margin: 0 auto;
        max-width: 85%;
        transition: all linear 0.2s;
    }
    #artist:hover{
        width: 560px;
    }

    .buttons{
        margin: 0 auto;
        max-width: 85%;
        /* border: 1px solid white; */
        margin-top: 30px;
        display: flex;
    }
    button{
        padding: 10px;
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
        margin: 0 auto;
        text-align: right;
        /* border: 1px solid white; */
        margin-right: 5px;
        padding-top: 8px;
        transition: all linear 0.2s;
    }
    p:hover{
        
        cursor: pointer;
    }
    a:hover{
        color: #db1ab1;
    }
`

const Home = () => {
    let user1 = auth.currentUser;
    const logout = e => {
        e.preventDefault();
        auth.signOut()
            .then((auth) => {
                window.location.reload();
                console.log('User Logged out')

            })
            .catch(error => alert(error.message));
    };
    if (user1) {
        return (
            <DIV className="home">
                <div className="buttons">
                    <h4 onClick={logout}>You are signed in: {user1.email}</h4>
                    <p><a href="mailto:bookings.Khaleed@gmail.com?subject=Bookings">Email</a></p>
                </div>
                <div className='artist-div'>
                    <img id="artist" src={artist} alt="artist" width="550px" />
                </div>
            </DIV>
        );
    } else {
        return (
            <DIV className="home">
                <div className="buttons">
                    <Link to='/SignUp'><button>Sign Up</button></Link>
                    <Link to='/LogIn'><button>Log In</button></Link>
                    <p><a href="mailto:bookings.Khaleed@gmail.com?subject=Bookings">Email</a></p>
                </div>
                <div className='artist-div'>
                    <img id="artist" src={artist} alt="artist" width="550px" />
                </div>
            </DIV>
        );
    }
}
export default Home;
