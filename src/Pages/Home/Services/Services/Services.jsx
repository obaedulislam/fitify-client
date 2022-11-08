import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
              setServices(data.data);
            } else {
              toast.error(data.error);
            }
          })
          .catch((err) => toast.error(err.message));
    }, [refresh])

    return (
        <div className='lg:py-20 md:py-12 py-10'>
            <div className='blog-head w-1/2 mx-auto'>
                <h2 className="md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Our Service</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-2'></div>
                <p className='mt-5 text-center'>We ensure that, you can get world class service form us. Here are some some service that we provide now!</p>
            </div>
            {/* Blog Header End */}
            <div className='grid grid-cols-3 gap-5 mt-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
