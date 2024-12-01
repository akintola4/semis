import PropTypes from 'prop-types';

function ValueCard({ info }) {
  return (
    <div 
      className="flex flex-col gap-4 h-full  hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg" 
      data-aos="fade-right" >
        <h4 className="text-lg p-2 rounded-lg items-center flex  justify-center text-primaryColor dark:bg-primaryColor bg-[#EBEFFF] w-2/12  dark:text-white font-bold font-sans">
        {info.id}
      </h4>
      <h4 className="text-sm md:text-lg font-semibold  dark:text-white  font-sans">
        {info.title}
      </h4>
      <p className="font-medium  dark:text-white text-sm md:text-md">
        {info.description}
      </p>
    </div>
  );
}

ValueCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ValueCard;
//is used PropTypes to stop the eslint errors
// ValueCard.propTypes ensures that the 'info' prop is an object with the required 
// 'img', 'title', and 'description' properties. This helps catch potential 
// errors early in development, making the code more reliable and maintainable.
// The 'isRequired' validator ensures that the 'img', 'title', and 'description' 
// properties within the 'info' prop are mandatory. This guarantees that the 
// component receives all the necessary data to render correctly.