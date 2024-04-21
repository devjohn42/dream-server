import { contactAnimations } from '../../database/animations.js';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.div
      {...contactAnimations.bottom}
      className='w-full flex flex-col gap-y-10 items-center'
    >
      <h3 className='w-[80%] sm:w-full text-neon text-center font-semibold'>
        Send an email and ask your questions
      </h3>
      <div className='w-[90%] lg:w-[900px] bg-aliceBlue dark:bg-black p-[1rem] md:p-[1.75rem] rounded-[0.5rem]'>
        <form action='' className='flex flex-col gap-y-3 sm:gap-y-5'>
          {/* names inputs */}
          <div className='flex flex-col gap-y-3 sm:gap-y-5 lg:flex-row justify-between'>
            <div className='flex flex-col gap-y-2 w-full lg:w-[400px]'>
              <label
                htmlFor=''
                className='text-[16px] sm:text-[18px] text-rich dark:text-alice'
              >
                First Name
              </label>
              <input
                type='text'
                placeholder='Enter your first name'
                className='bg-alice dark:bg-jet py-2 px-2 text-[15px] sm:text-[1rem] text-rich dark:text-alice outline-none border-transparent focus:border-neon border-[2px] rounded-[0.25rem]
                focus:bg-transparent focus:rounded-[0.5rem] focus:placeholder:text-transparent
                placeholder:absolute placeholder:text-rich placeholder:dark:text-alice/50 placeholder:font-light'
              />
            </div>
            <div className='flex flex-col gap-y-2 w-full lg:w-[400px]'>
              <label
                htmlFor=''
                className='text-[16px] sm:text-[18px] text-rich dark:text-alice'
              >
                Last Name
              </label>
              <input
                type='text'
                placeholder='Enter your last name'
                className='bg-alice dark:bg-jet py-2 px-2 text-[15px] sm:text-[1rem] text-rich dark:text-alice outline-none border-transparent focus:border-neon border-[2px] rounded-[0.25rem]
                focus:bg-transparent focus:rounded-[0.5rem] focus:placeholder:text-transparent
                placeholder:absolute placeholder:text-rich placeholder:dark:text-alice/50 placeholder:font-light'
              />
            </div>
          </div>
          {/* email input */}
          <div className='flex flex-col gap-y-2 w-full'>
            <label
              htmlFor=''
              className='text-[16px] sm:text-[18px] text-rich dark:text-alice'
            >
              Email
            </label>
            <input
              type='text'
              placeholder='Enter your best email'
              className='bg-alice dark:bg-jet py-2 px-2 text-[15px] sm:text-[1rem] text-rich dark:text-alice outline-none border-transparent focus:border-neon border-[2px] rounded-[0.25rem]
                focus:bg-transparent focus:rounded-[0.5rem] focus:placeholder:text-transparent
                placeholder:absolute placeholder:text-rich placeholder:dark:text-alice/50 placeholder:font-light'
            />
          </div>
          {/* subject input */}
          <div className='flex flex-col gap-y-2 w-full'>
            <label
              htmlFor=''
              className='text-[16px] sm:text-[18px] text-rich dark:text-alice'
            >
              Subject
            </label>
            <input
              type='text'
              placeholder='Enter subject'
              className='bg-alice dark:bg-jet py-2 px-2 text-[15px] sm:text-[1rem] text-rich dark:text-alice outline-none border-transparent focus:border-neon border-[2px] rounded-[0.25rem]
                focus:bg-transparent focus:rounded-[0.5rem] focus:placeholder:text-transparent
                placeholder:absolute placeholder:text-rich placeholder:dark:text-alice/50 placeholder:font-light'
            />
          </div>
          {/*textarea*/}
          <div className='flex flex-col gap-y-2'>
            <label
              htmlFor=''
              className='text-[16px] sm:text-[18px] text-rich dark:text-alice'
            >
              Message
            </label>
            <textarea
              name=''
              id=''
              cols='100'
              rows='5'
              placeholder='How can we help you today...'
              className='resize-none bg-alice dark:bg-jet py-2 px-2 text-[15px] sm:text-[1rem] text-rich dark:text-alice outline-none border-transparent focus:border-neon border-[2px] rounded-[0.25rem]
                focus:bg-transparent focus:rounded-[0.5rem] focus:placeholder:text-transparent
                placeholder:absolute placeholder:text-rich placeholder:dark:text-alice/50 placeholder:font-light'
            />
          </div>
          {/*button input*/}
          <button
            type='submit'
            className='bg-neon py-2 sm:py-3 rounded-[0.25rem] text-alice font-semibold text-[16px] sm:text-[18px] outline-none hover:bg-neon/80 hover:rounded-[0.5rem] duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
