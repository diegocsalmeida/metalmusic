import React, {useState} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube'

const Container = styled.div`
  width: 330px;
  height: 200px;
  perspective: 1000px;
  
`;

const Flipper = styled.div`
    position: relative;
	width: 100%;
	height: 100%;
    transition: transform 0.8s;
	transform-style: preserve-3d;

    &:hover{
        transform: rotateY(180deg);
    }
    
`;

const Link = styled.a`

`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  
`;
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Titulo = styled.p`
    text-align: center;
`;

function CardFlipper({ front, back, href, target, title }){
    

    const [play, setPlay] = useState(false)


    function handleMouseEnter(){
        setTimeout(() => {
            setPlay(true)
        }, 2000)
        
    }
    
    function handleMouseLeave(){
        setPlay(false)
    }

    return(
        /*<div class="flip-container">
        <div class="flipper">
          <div class="front">
            <img src="https://picsum.photos/id/411/300/200" />
          </div>
          <div class="back">
            <img src="https://picsum.photos/id/249/300/200" />
          </div>
        </div>
      </div>
      */
     <Container>
         <Flipper  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <Link href={href} target={target} title={title}>
             <Front>
                <img src={front} alt="Front"/>
             </Front>
             <Back >
                <ReactPlayer url={href} 
                    height="200" width="300"
                    playing={play}/>
             </Back>
             </Link>
         </Flipper>
        <Titulo>{title}</Titulo>
     </Container>
    )
}

export default CardFlipper;