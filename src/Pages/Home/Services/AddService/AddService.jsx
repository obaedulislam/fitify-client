import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

        //Send Object Variable
        const service = {
            title: title,
            image: image,
            rating: rating,
            price: price,
            description: description          
        };

        fetch('http://localhost:5000/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message);
                form.reset();
            } else {
                toast.error(data.error);
            }
        })
        .catch(err => {
            toast.error(err.message);
        })

    }


    return (
        <div className='lg:py-20 md:py-12 py-10'>
            
                <h2 className="font-specially md:text-4xl text-2xl text-center  text-[#0A5078]">Add New Service</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-1'></div>
            <div className='max-w-[650px] mx-auto bg-gray-200 p-7 mt-5 shadow-lg border-gray-700 rounded-xl'>

                <form onSubmit={handleAddService} className='text-black'>   
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <input name="title" type="text" placeholder="Service Title" className="input  w-full  input-bordered bg-white placeholder-slate-600"  required/>
                        <input name="image" type="url" placeholder="Service Image URl" className="input  w-full  input-bordered bg-white placeholder-slate-600" required/>
                        <input name="price" type="text" placeholder="Service Price" className="input  w-full  input-bordered bg-white placeholder-slate-600" required />
                        <input name="rating" type="text" placeholder="Give Rating(example:4.8)"  className="input  w-full  input-bordered bg-white placeholder-slate-600" />
                    </div>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full bg-white mt-5 placeholder-slate-600 text-md" placeholder="Service detail description "  required></textarea>

                    <input className="mt-3 py-2 px-3 w-full rounded-lg bg-[#0A5078] hover:bg-[#0e6597]  duration-300   text-white capitalize text-xl font-bold shadow-lg cursor-pointer " type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;