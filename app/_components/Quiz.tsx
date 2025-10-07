'use client';
import { useState } from 'react';

const quiz = {
	question: "What does the 'as' keyword do in Typescript?",
	options: [
		'Performs runtime type conversion',
		'Performs compile-time type assertion',
		'Declares async functions',
		'Imports modules',
	],
	answer: 1,
};

const Quiz = () => {
	const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleSubmit(){
    setSubmitted(true);
  }
  
	return <section id="quiz" className="py-20 px-6 bg-blue-50 w-full">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Try a Sample Quiz
      </h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">{quiz.question}</h3>
        {quiz.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`block w-full text-left p-3 rounded-md mb-2 border ${
              selected === i
                ? "bg-blue-100 border-blue-500"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            {opt}
          </button>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white rounded-md w-full py-2 mt-3 hover:bg-blue-700 transition"
        >
          Submit
        </button>
        {submitted && (
          <p className="mt-4 text-sm font-medium">
            {selected === quiz.answer ? "✅ Correct!" : "❌ Try again."}
          </p>
        )}
      </div>
    </section>
};

export default Quiz;
