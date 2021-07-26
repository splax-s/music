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
        display: flex; 
    
    a{
        padding: 3px;
        margin-left: 12px;
        text-decoration: none;
    }

    #newsletter{
            margin-top: 1px;
    }
    
    @media (max-width: 700px){
        display: none;
    }
`
const RightNav = () => {
    return (
        <UL>
            <li><a href="https://facebook.com/khaleedthefirst/"><img src={facebook} width="34" alt="social" href=""></img></a></li>
            <li><a href="https://instagram.com/khaleedthefirst"><img src={instagram} width="35" alt="social"></img></a></li>
            <li><a href="https://twitter.com/khaleedthefirst"><img src={twitter} width="35" alt="social"></img></a></li>
            <li><Link to="/Youtube"><img src={youtube} width="35" alt="social"></img></Link></li>
            <li><Link to="/Music"><img src={music} width="35" alt="social"></img></Link></li>
            {/* <li><Link to="#"><img src = {contact} width = "35" alt = "social"></img></Link></li> */}
            <li><Link to="/Newsletter"><img id="newsletter" src={newsletter} width="30" alt="social"></img></Link></li>
        </UL>
    );
}

export default RightNav;