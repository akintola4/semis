import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function Fqa({ fqa }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col gap-6  p-4 rounded-xl w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 " data-aos="fade-right">
      <div className="flex flex-row justify-between gap-2 items-center cursor-pointer"  onClick={toggleOpen} >
        <h4 className="text-sm md:text-lg font-semibold text-gray-50 ">
          {fqa.title}
        </h4>
        <button name="FQA toggle" className='bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 p-3 rounded-lg' id='FQA toggle'>
          <IoIosArrowDown className={`transition-transform text-white  ${isOpen ? 'rotate-[180deg]' : ''
                            }`}/>
        </button>
      </div>
      {isOpen && (
        <p className="font-light text-sm md:text-md text-gray-50 md:w-10/12 md:text-md delay-200 duration-300 ease-out">
          {fqa.description}
        </p>
      )}
    </div>
  );
}

Fqa.propTypes = {
  fqa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Fqa;