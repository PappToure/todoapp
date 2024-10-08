import logo from '../assets/logo.png';
import illustration from '../assets/illustration.svg';

function Banner() {
	return <div className='col-md-6 col-12'>
                <img src={logo} alt='Todo App' className='mx-auto w-25 mt-5' />
                <div className='w-75'>
                    <img src={illustration} alt='Todo App' className='mx-auto w-100 mt-5' />
                </div>
            </div>
}

export default Banner
