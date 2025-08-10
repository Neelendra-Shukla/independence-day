import image from '../assets/indiancity.jpg';

const Present = () => {
  return (
    <div id='head' className=''>

    <center>
      <h1 className='text-5xl my-8 font-bold items-center'>About Our Coutry</h1>
    </center>

        <div className='flex flex-row justify-center items-center m-21 max-w-10xl gap-50 '>
            <div>  
                <p className='text-4xl mb-19 text-green-600'>India is a land of diverse cultures,<br /> rich history, and vibrant traditions,<br /> often celebrated for its unity in diversity.</p>
            </div>
            <div>
                <img className='size-80 rounded-xl imag'
                src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Present;
