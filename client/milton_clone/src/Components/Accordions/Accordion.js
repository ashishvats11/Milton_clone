import React, {useState} from 'react';
import SingleQuestion from './SingleQuestion';
import data from './data';


function Accordion() {
  const [questions, setQuestions] = useState(data.questions);

  return (
    
      <div className="bg-orange-50 pt-44 flex flex-col gap-10">
        <div className='flex flex-col gap-3'>
            <div>
                <p className="bg-gray-200 inline rounded-3xl px-4 py-1 font-medium">Relevant stuff, bla bla 📣</p>
            </div>
            <div>
            <p className="font-bold text-5xl">Frequently asked questions</p>
            </div>
                  
                
        </div> 
        <div className='flex flex-col gap-2  px-48'>
          <p className='justify-start'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
          </p>
         
        </div>
      </div>
    
  );
}

export default Accordion;
