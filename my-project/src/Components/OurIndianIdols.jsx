import mahatmagandhi from '../assets/mahatmagandhi.jpg';
import balGangadharTilak from '../assets/balGangadharTilak.jpg';
import Bhagat from '../assets/Bhagat.jpg';
import chandrasekhar from '../assets/chandrasekhar.jpg';
import jawaharlal from '../assets/jawaharlal.jpg';
import rani from '../assets/rani.jpg';
import subhash from '../assets/mahatmagandhi.jpg';
const OurIndianIdols = () => {
  return (
    <center>
      <div className='mt-30 mb-10'>
      <div className='text-6xl mb-15 italic font-bold'>
        <span className='mx-2 text-orange-500'>Our</span>
        <span className='mx-2 text-white-500'>Indian</span>
        <span className='mx-2 text-green-500'>Idol</span>
      </div>
      <div className="flex flex-wrap gap-20 w-250 images">

      <div className='imgp or'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>Mahatma Gandhi <br /> 
        <span>1200-1220</span>
        </p>
      </div>

      <div className='imgp wh'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
      <p className='my-3'>Tilak ji <br /> 
        <span>1200-1220</span>
        </p>
      </div>

        <div className='imgp gr'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bhai <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp  or'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>bhai <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp wh'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bhai <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp gr'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp or'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp wh'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        </div>

        <div className='imgp gr'>
        <img className='h-70' src={ mahatmagandhi } alt="" />
        <p className='my-3'>apna bahan <br /> 
        <span>1200-1220</span>
        </p>
        </div>
    </div>
    </div>
    </center>
  )
}

export default OurIndianIdols;
