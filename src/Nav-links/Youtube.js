import styled from "styled-components";
import HomeLink from "../Navbar/HomeLink";
import Iframe from "react-iframe";

const DIV = styled.div`
    p{
        text-align: center;
        margin-top: 30px;
        font-size: 25px;
    }
    #a{
        margin: 0 auto;
        max-width: 85%;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
    #b{
        margin: 0 auto;
        max-width: 85%;
        display: flex;
        justify-content: space-between;
    }
    Iframe{
        border: none;
        border-radius: 5px;
        max-width: 46%;
    }
    @media (max-width: 700px){
        #a{
            display: block;
        }
        #b{
            display: block;
        }
        Iframe{
            border: none;
            border-radius: 5px;
            max-width: 100%;
        }
    }
`
const Youtube = () => {
    return (  
        <DIV className = "music">
            <HomeLink></HomeLink>
            <p>Youtube</p>
            <div id = "a">
                <Iframe width="500" height="315" src="https://www.youtube.com/embed/sjCsO9k8P4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                <Iframe width="500" height="315" src="https://www.youtube.com/embed/G4wfcV9--zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>           
            </div>
            <div id = "b">
                <Iframe width="560" height="315" src="https://www.youtube.com/embed/QmtFJWiySo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>                        
                <Iframe width="560" height="315" src="https://www.youtube.com/embed/3VGQ-ukmKOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            </div>
        </DIV>
    );
}
export default Youtube;