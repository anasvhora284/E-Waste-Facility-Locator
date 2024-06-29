import bg_video  from '../assets/videos/bgV1.mp4'
import './video_bg.css'


const VideoBg = () => {
    return ( 
        <>
            <div id="video-bg">
            <video autoPlay muted loop src={ bg_video } id='video-item'>  
            </video>
            </div>
        </>
     );
}
 
export default VideoBg;