import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [refresh, setRefresh] = useState(false);


    useEffect(() =>{
        fetch('https://b6a11-service-review-server-side-obaedulislam-obaedulislam.vercel.app/services')
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
              setServices(data.data);
              setRefresh(!refresh);
            } else {
              toast.error(data.error);
            }
          })
          .catch((err) => toast.error(err.message));
    }, [refresh])

    return (
        <div className='lg:py-20 md:py-12 py-10'>
            <div className='service-head md:w-1/2 w-full mx-auto'>
                <h2 className="md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Our Services</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-2'></div>
                <p className='mt-5 text-center'>We ensure that, you can get world class service form us. Here are some some service that we provide now!</p>
            </div>
            {/* Service Header End */}

            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            {/* Service Card Map Function ENd */}
        </div>
    );
};

export default Services;
