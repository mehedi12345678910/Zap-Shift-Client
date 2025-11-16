import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const {userName,review:testimonial,user_photoURL}=review;
  return (
    <div className="max-w-md bg-white shadow-md rounded-2xl p-8 border border-gray-100">
      {/* Quote Icon */}
      <div className="text-teal-500 text-3xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* Text */}
      <p className="mb-6">
      {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 mb-6"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-700 rounded-full">
            <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
