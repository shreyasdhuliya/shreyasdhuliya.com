import {Parallax} from 'react-parallax'

//import bg images
import bgImage from './images/shreya.jpg'

export default function AppBg() {

    return (
        <>
    <Parallax bgImage={ bgImage} strength={400} blur={0}>
              <div style={{height:"700px"}}>                     
              </div>
          </Parallax>
        </>
    );
}