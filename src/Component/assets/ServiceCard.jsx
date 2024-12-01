import PropTypes from 'prop-types';

function ServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 dark:border-transparent  border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg">

      <div className='flex flex-col '>
        <p className="font-bold w-1/12 text-sm p-2  text-center bg-primaryColor dark:bg-DarkprimaryColor text-gray-50 rounded-full md:text-md ">{service.id} </p>
        <span className='bg-transparent'></span>
      </div>

      <h4 className="  text-xl font-semibold dark:text-gray-50 text-gray-950">{service.title}</h4>
      <p className="font-bold text-gray-500 text-sm dark:text-gray-100 md:text-md ">{service.description} </p>


    </div>

  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ServiceCard;