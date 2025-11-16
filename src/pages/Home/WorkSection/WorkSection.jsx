import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const cardData = [
  {
    id: 1,
    img: <CiDeliveryTruck />,
    title: "Booking pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    img: <CiDeliveryTruck />,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time..",
  },
  {
    id: 1,
    img: <CiDeliveryTruck />,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 1,
    img: <CiDeliveryTruck />,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const WorkSection = () => {
  return (
    <div>
        <h1 className="text-3xl py-4 font-bold">How it Works</h1>
      <div className="grid md:grid-cols-4 gap-5 grid-cols-1">
        {cardData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-6 hover:bg-gray-400">
            <p className="text-5xl ">{item.img}</p>
            <h3 className="text-2xl font-bold text-start">{item.title}</h3>
            <p className="text-gray-500 text-start">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
