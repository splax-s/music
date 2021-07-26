import styled from "styled-components";
import HomeLink from "../Navbar/HomeLink";
import Iframe from 'react-iframe';

const DIV = styled.div`
    p{
        text-align: center;
        margin-top: 30px;
        font-size: 25px;
    }
    Iframe {
        margin: 0 auto;
        max-width: 85%;
        width: 75%;
        height: 150px;
        border-radius: 8px;
        border: none;
        margin-top: 40px;
        max-width:660px;
        overflow: hidden;
        background: transparent; 
        color: white;
    }
`
const Music = () => {
    return (  
        <DIV className = "music">
            <HomeLink></HomeLink>
            <p>Songs</p>
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/oya-mogbe/1550836552?i=1550836560"></Iframe>        
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/jeje/1529268446?i=1529268447"></Iframe>
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/odo/1523510039?i=1523510042"></Iframe>
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/maya/1525976496?i=1525976497"></Iframe>
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/e-s%C3%A9/1523510039?i=1523510040"></Iframe>
            <Iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ng/album/you-for-dey-feat-kellidion/1521303684?i=1521303685"></Iframe>
        </DIV>
    );
}
export default Music;