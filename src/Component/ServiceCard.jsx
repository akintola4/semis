import PropTypes from 'prop-types';

function ServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 dark:border-transparent  border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg" data-aos="fade-right">

      <h4 className="  text-xl font-semibold dark:text-gray-50 text-gray-950">{service.title}</h4>
      <p className="font-light text-lg dark:text-gray-100 md:text-md ">{service.description} </p>

 <img 
        src={`img/${service.img}`} 
        className="" 
        alt={service.title} 
      />
    </div>

  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ServiceCard;