import Burger from "./Burger"
import styled from "styled-components";
import RightNav from "./RightNav";
import { Link } from "react-router-dom";

const NAV = styled.nav`
        padding-top: 30px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        max-width: 85%;
        margin: 0 auto;
        border-bottom: 1px solid #f2f2f2;
    
    p{
        color: #db1ab1;
        font-size: 25px;
        font-weight: 300;
        transition: all linear 0.3s;
    }
    p:hover{
        color: white;
    }
    a{
        text-decoration: none;
    }
`

const Navbar = () => {
    return ( 
        <NAV className= "navbar">
            <Link to = "/"><p>KHALEED</p></Link>
            <RightNav/>
            <Burger></Burger>
        </NAV>
    );
}
 
export default Navbar;