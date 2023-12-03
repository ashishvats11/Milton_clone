import React, {useState} from 'react';
import SingleQuestion from './SingleQuestion';
import data from './data';
import accordion from './accordion.css';

function Accordion() {
  const [questions, setQuestions] = useState(data.questions);

  return (
    <main>
      <div className="container">
        <h3>Frequently asked questions</h3>    
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
