import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DIV = styled.div`
    text-align: center;
    margin-top: 100px;

    h2{
        font-size: 80px;
        font-weight: 300;
    }
    p{
        margin-top: 5px;
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 300;
    }
    a{
        color: #db1ab1;
        transition: all linear 0.2s;
    }
    a:hover{
        color: blue;
    }
`
const NotFound = () => {
    return (  
        <DIV className = "not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to = "/">Back to the homepage...</Link>
        </DIV>
    );
}
 
export default NotFound;