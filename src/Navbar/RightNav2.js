import { Link } from 'react-router-dom';
// import contact from '../images/contact.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import music from '../images/music.png';
import newsletter from '../images/newsletter.png';
import styled from 'styled-components';

const UL = styled.ul`
        margin-left: auto;
        list-style: none;
        display: none; 

    a{
        padding: 3px;
        margin-left: 18px;
        text-decoration: none;
    }
   
    @media (max-width: 700px){
        display: flex;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'} ;
        flex-direction: column;
        background-color: black;
        top: 0;
        right: 0;
        height: 60%;
        width: 60%;
        padding-top: 3.5rem;
        padding-left: 0.1rem;
        opacity: 0.9;
        transition: all 0.1s linear;   

        h3{
            font-weight: 500;
            font-size: 16px;
            transition: all linear 0.1s;
            color: #db1ab1;
        }
        h3:hover{
            color: #ffc4f2;
        }

        li{
            transition: all 0.1s linear;   
            text-align: center;
        } 
    }
`
const RightNav2 = ({ open }) => {
    return (
        <UL open={open}>
            <li><a href="https://facebook.com/khaleedthefirst/"><h3>Facebook</h3><img src={facebook} width="34" alt="social"></img></a></li>
            <li><a href="https://instagram.com/khaleedthefirst"><h3>Instagram</h3><img src={instagram} width="35" alt="social"></img></a></li>
            <li><a href="https://twitter.com/khaleedthefirst"><h3>Twitter</h3><img src={twitter} width="35" alt="social"></img></a></li>
            <li><Link to="/Youtube"><h3>YouTube</h3><img src={youtube} width="35" alt="social"></img></Link></li>
            <li><Link to="/Music"><h3>Music</h3><img src={music} width="35" alt="social"></img></Link></li>
            {/* <li><Link to="#"><h3>Contact</h3><img src = {contact} width = "35" alt = "social"></img></Link></li> */}
            <li><Link to="/Newsletter"><h3>Newsletter</h3><img id="newsletter" src={newsletter} width="30" alt="social"></img></Link></li>
        </UL>
    );
}

export default RightNav2;