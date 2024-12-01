import PropTypes from 'prop-types';

function PlansCard({ plans }) {
  // Fallback to empty array if services is undefined
  const serviceList = plans.services || [];

  return (
    <div className="flex flex-col md:w-11/12  h-full justify-between  gap-10 bg-white dark:bg-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px] p-6 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg" data-aos="fade-right">
      <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2 p-2 rounded-lg bg-[#F6F7FF] dark:bg-DarkprimaryColor'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <img
            src={`img/${plans.img}`}
            className="dark:invert"
            id={plans.title}
            name={plans.title}
            alt={plans.title}
          />
          <h4 className='font-medium text-lg text-primaryColor dark:text-white'>{plans.plan}</h4>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <p className='font-medium text-lg flex flex-row items-center'>
            <span className='font-semibold text-2xl'>${plans.price}</span>/per month
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-4
      '>
        {/* Fallback to individual service properties if services array is not present */}
        {serviceList.length > 0 ? (
          serviceList.map((service, index) => (
            <div key={index} className='flex flex-row  gap-4 items-start'>
              <img src={`img/${plans.img}`} alt={`Service ${index + 1}`} />
              <p className='text-md font-light'>{service}</p>
            </div>
          ))
        ) : (
          // Fallback rendering using individual service properties
          <>
            {plans.service1 && (
              <div className='flex flex-row  gap-4 items-start'>
                <img src={`img/${plans.img}`} alt="Service 1" />
                <p className='text-md font-light'>{plans.service1}</p>
              </div>
            )}
            {plans.service2 && (
              <div className='flex flex-row  gap-4 items-start'>
                {plans.img2 && <img src={`img/${plans.img2}`} alt="Service 2" />}
                <p className='text-md font-light'>{plans.service2}</p>
              </div>
            )}
            {/* Add more service rendering as needed */}
          </>
        )}
      </div>
      </div>
   

      <button 
        name="public" 
        id='public' 
        className='px-6 py-4 bg-[#9DA7FF] dark:bg-DarkprimaryColor dark:text-white dark:hover:bg-transparent dark:hover:border-primaryColor border border-transparent bg-opacity-25 hover:bg-btn-base-light hover:text-white transition ease-in-out text-center delay-50 duration-150 text-lg md:textmd rounded-xl text-primaryColor'
      >
        Subscribe
      </button>
    </div>
  );
}

PlansCard.propTypes = {
  plans: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    img2: PropTypes.string,
    img3: PropTypes.string,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string),
    service1: PropTypes.string,
    service2: PropTypes.string,
    service3: PropTypes.string,
    service4: PropTypes.string,
    service5: PropTypes.string,
    service6: PropTypes.string,
  }).isRequired
};

export default PlansCard;