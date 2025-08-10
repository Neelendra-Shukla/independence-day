import mahatmagandhi from '../assets/mahatmagandhi.jpg';
import balGangadharTilak from '../assets/balGangadharTilak.jpg';
import Bhagat from '../assets/Bhagat.jpg';
import chandrasekhar from '../assets/chandrasekhar.jpg';
import jawaharlal from '../assets/jawaharlal.jpg';
import rani from '../assets/rani.jpg';
import subhash from '../assets/mahatmagandhi.jpg';
const OurIndianIdols = () => {
  return (
    <center className='idols'>
      <div className='mt-12 mb-10'>
        <div className='text-6xl mb-15 italic font-bold'>
          <span className='mx-2 text-orange-500 left-in-animation'>Our</span>
          <span className='mx-2 text-white-500 still-animation'>Indian</span>
          <span className='mx-2 text-green-500 right-in-animation'>Idol's</span>
        </div>
      <div className="flex flex-wrap gap-20 w-250 images">

      <div className='imgp or slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>Mahatma Gandhi <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp wh slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>Tilak ji <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp gr slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bhai <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp  or slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>bhai <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp wh slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bhai <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp gr slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp or slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp wh slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>

      <div className='imgp gr slide-up-animation'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        <a className='btna' href="">click for details</a>
      </div>
    </div>
    </div>
    </center>
  )
}

export default OurIndianIdols;
