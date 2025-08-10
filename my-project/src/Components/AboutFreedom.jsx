import video from '../assets/video.mp4';

const AboutFreedom = () => {
    return <>
    <div>
        <center className="text-orange-500 text-6xl mt-25 italic font-bold">15 
            <span className="text-white">August</span> 
            <span className="text-green-600">1947</span></center>
        <center>
        <div className="text-2xl w-270 mt-5 font-medium">
            <p className="my-5 text-orange-500">Independence Day is celebrated every year on 15th August. On this day in 1947, India gained freedom from British rule. It is a symbol of patriotism and pride.</p>

            <p className="my-5">On this day, the national flag is hoisted across the country. Schools, colleges, and government offices hold special programs. People sing patriotic songs and deliver speeches.</p>

            <p className="my-5 text-green-500">Independence Day reminds us of the brave heroes who sacrificed their lives for freedom. It inspires us to stay united and serve our nation.</p>
        </div>

        <video className='h-70 mt-12 mb-8 shadow-3xl rounded-3xl' src={video} controls></video>
        </center>

    </div>
    </>;
}

export default AboutFreedom;