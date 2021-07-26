import { Link } from 'react-router-dom'
import styled from 'styled-components';

const FOOTER = styled.footer`
    .foot{
        margin-top: 150px;
        margin-bottom: 30px;
        text-align: center;
        text-decoration: none;
    }
    .foot a{
        text-decoration: none;
    }
    .foot p{
        color: #db1ab1;
        font-size: 15px;
    }
`
const Footer = () => {
    return ( 
        <FOOTER>
            <div className = "foot">
                <Link to = "/">Copyright &copy; 2021</Link><br /><br />
                <p>designed by mitech</p>
            </div>
        </FOOTER>
    );
}
 
export default Footer;