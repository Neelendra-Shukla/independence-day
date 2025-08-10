import video from '../assets/video.mp4';
import "./freedom-animation.css";

const AboutFreedom = () => {
    return <>
    <div id='about' className='about'>
        <center className="text-orange-500 text-6xl mt-10 italic font-bold ">
            <span class="left-in-animation">15</span> 
            <span className="text-white still-animation">August</span> 
            <span className="text-green-600 right-in-animation">1947</span></center>
        <center>
        <div className="text-2xl w-270 mt-5 font-medium">
            <p className="my-5 text-orange-500 slide-up-animation">Independence Day is celebrated every year on 15th August. On this day in 1947, India gained freedom from British rule. It is a symbol of patriotism and pride.</p>

            <p className="my-5 slide-up-animation">On this day, the national flag is hoisted across the country. Schools, colleges, and government offices hold special programs. People sing patriotic songs and deliver speeches.</p>

            <p className="my-5 text-green-500 slide-up-animation">Independence Day reminds us of the brave heroes who sacrificed their lives for freedom. It inspires us to stay united and serve our nation.</p>
        </div>

        <video className='h-70 mt-12 mb-13 shadow-3xl rounded-3xl slide-up-animation' src={video} controls></video>
        </center>

    </div>
    </>;
}

export default AboutFreedom;