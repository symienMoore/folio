
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareBehance, faLinkedin, faYoutube  } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div>
        <div className="container mx-auto h-24">
            <div className="flex items-center justify-center">
                <div className='flex space-x-4 pt-10 text-regal-blue text-2xl flex-1'>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faSquareBehance} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <img className='h-16' src="src/assets/logo-2.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar