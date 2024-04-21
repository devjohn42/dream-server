import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitter
} from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='bg-jet py-5 flex flex-col gap-y-6 items-center'>
        <div className='w-full flex flex-col gap-y-6 md:flex-row justify-around items-center'>
          <div className='flex flex-col gap-y-2 items-center md:items-start'>
            <Logo />
            <div className='flex gap-x-4'>
              <a href='#'>
                <FaDiscord className='text-[1.5rem] text-alice hover:text-neon cursor-pointer' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-[1.5rem] text-alice hover:text-neon cursor-pointer' />
              </a>
              <a href='#'>
                <FaInstagram className='text-[1.5rem] text-alice hover:text-neon cursor-pointer' />
              </a>
              <a href='#'>
                <FaTwitter className='text-[1.5rem] text-alice hover:text-neon cursor-pointer' />
              </a>
              <a href='#'>
                <FaReddit className='text-[1.5rem] text-alice hover:text-neon cursor-pointer' />
              </a>
            </div>
          </div>
          <div className='flex gap-x-4'>
            <div>
              <h6 className='text-neon font-medium mb-1'>Explore</h6>
              <nav>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  About
                </p>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Services
                </p>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Pricing
                </p>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Contact
                </p>
              </nav>
            </div>
            <div>
              <h6 className='text-neon font-medium mb-1'>Policies</h6>
              <nav>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Privacy Policy
                </p>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Company Information
                </p>
              </nav>
            </div>
            <div>
              <h6 className='text-neon font-medium mb-1'>Resources</h6>
              <nav>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Support
                </p>
                <p
                  href=''
                  className='text-alice hover:text-neon cursor-pointer'
                >
                  Feedback
                </p>
              </nav>
            </div>
          </div>
        </div>
        <hr className='w-[90%] m-auto bg-alice' />
        <div>
          <p className='text-neon font-semibold text-center'>
            &copy; 2024 DreamServer LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
