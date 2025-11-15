

import React from "react";
import img from "../../../assets/service.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: img,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      img: img,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      img: img,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      img: img,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      img: img,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      img: img,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-secondary p-10 mt-10 rounded-4xl">
      <div className="text-center mb-10 text-white mt-20 flex flex-col items-center">
        <h1 className="text-3xl font-bold py-2">Our Services</h1>
        <p className="text-[15px] w-[700px] text-gray-400">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
      <div className="grid-cols-2 grid md:grid-cols-3 gap-6">
        {
            services.map((item)=>(
                <div key={item.id} className="bg-white rounded-2xl p-8 flex flex-col items-center hover:bg-green-300" >
                 <img className="rounded-full h-15 shadow-xl  flex justify-center mb-2 shadow-black/50" src={item.img} alt="" />
                 <h3 className="text-2xl font-bold text-center">{item.title}</h3>
                 <p className="text-center text-[14px]">{item.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Services;
