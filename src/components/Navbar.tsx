
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareBehance, faLinkedin, faYoutube  } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div>
        <div className="container mx-auto h-24">
            <div className='flex space-x-4 pt-10 text-regal-blue text-2xl'>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faSquareBehance} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
    </div>
  )
}

export default Navbar