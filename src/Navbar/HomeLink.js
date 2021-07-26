import styled from "styled-components";
import { Link } from "react-router-dom";

const DIV = styled.div`
        margin: 0 auto;
        max-width: 85%;
        text-align: left;
    
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
`
const HomeLink = () => {
    return (  
        <DIV className = "buttons">
            <Link to = "/"><button>Home</button></Link>
        </DIV>
    );
}
 
export default HomeLink;