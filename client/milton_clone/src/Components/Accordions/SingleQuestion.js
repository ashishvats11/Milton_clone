
import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
      <div className="question bg-gray-200 text-black font-semibold py-5 px-4 mb-4 rounded-2xl shadow-md" onClick={() => setShowInfo(!showInfo)}>
        <header className="flex justify-between items-center">
          <h4 className="text-lg">{title}</h4>
          <button className="scale-150">
            {showInfo ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </button>
        </header>
        {showInfo && <p className="text-gray-700 mt-2 text-start font-light">{info}</p>}
      </div>
  );
};

export default SingleQuestions;