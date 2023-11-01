// import React, { useState } from "react";

// const TestComponent = () => {
//   const questions = [
//     { id: 1, colA: "Energico", colB: "Culto", colC: "Activo" },
//     { id: 2, colA: "Apasionado", colB: "Racional", colC: "Analítico" },
//     { id: 3, colA: "Reacio", colB: "Reservado", colC: "Exigente" },
//     { id: 4, colA: "Espontaneo", colB: "Reflexivo", colC: "Estable" },
//     { id: 5, colA: "Emotivo", colB: "Inflexible", colC: "Escrupuloso" },
//     { id: 6, colA: "Positivo", colB: "Abierto", colC: "Dedicado" },
//     { id: 7, colA: "Involucrado", colB: "Entendido", colC: "Consciente" },
//     { id: 8, colA: "Dinamico", colB: "Objetivo", colC: "Fiable" },
//     { id: 9, colA: "Impulsivo", colB: "Complejo", colC: "Inestable" },
//     { id: 10, colA: "Animado", colB: "Emocionado", colC: "Dispuesto" },
//     // { id: 1, colA: "Pregunta 1" },
//     // { id: 2, colA: "Pregunta 2" },
//     // { id: 3, colA: "Pregunta 3" },
//     // { id: 4, colA: "Pregunta 4" },
//     // { id: 5, colA: "Pregunta 5" },
//     // { id: 6, colA: "Pregunta 6" },
//     // { id: 7, colA: "Pregunta 7" },
//     // { id: 8, colA: "Pregunta 8" },
//     // { id: 9, colA: "Pregunta 9" },
//     // { id: 10, colA: "Pregunta 10" },

//     // "Pregunta 2",
//     // "Pregunta 3",
//     // "Pregunta 4",
//     // "Pregunta 5",
//     // "Pregunta 6",
//     // "Pregunta 7",
//     // "Pregunta 8",
//     // "Pregunta 9",
//     // "Pregunta 10",
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion - 1);
//   };

//   return (
//     <div>
//       <h1>Test</h1>
      
//       <div class="container mx-md px-4 bg-primary ">
//         <h1>Pregunta {currentQuestion + 1}</h1>
//         <div class="flex w-48 space-x-4 justify-content: center bg-white">
//           <input
//             type="number"
//             min="0"
//             max="2" // value={col1C}
//             id="col1C" // className={style.input}
//             required
//           />
//           <p>{questions[currentQuestion].colA}</p>
//           <input
//             type="number"
//             min="0"
//             max="2" // value={col1C}
//             id="col1C" // className={style.input}
//             required
//           />
//           <p>{questions[currentQuestion].colB}</p>
//           <input
//             type="number"
//             min="0"
//             max="2" // value={col1C}
//             id="col1C" // className={style.input}
//             required
//           />
//           <p>{questions[currentQuestion].colC}</p>
//         </div>
//         <div>
//         {/* <button
//           onClick={handlePreviousQuestion}
//           disabled={currentQuestion === 0}
//         >
//           Anterior
//         </button> */}
//         <button
//           onClick={handleNextQuestion}
//           disabled={currentQuestion === questions.length - 1}
//         >
//           Siguiente
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default TestComponent;



// import React, { useState } from 'react';

// const TestComponent = () => {
//   const questions = [
//     {
//       question: 'Pregunta 1',
//       inputs: [
//         { id: 1, label: 'Opción 1', value: 10 },
//         { id: 2, label: 'Opción 2', value: 20 },
//         { id: 3, label: 'Opción 3', value: 30 },
//       ],
//     },
//     {
//       question: 'Pregunta 2',
//       inputs: [
//         { id: 1, label: 'Opción 1', value: 40 },
//         { id: 2, label: 'Opción 2', value: 50 },
//         { id: 3, label: 'Opción 3', value: 60 },
//       ],
//     },
//     // Agrega las demás preguntas aquí...
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedInputs, setSelectedInputs] = useState([]);
//   const [totalValue, setTotalValue] = useState(0);

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion - 1);
//   };

//   const handleInputChange = (inputId, inputValue) => {
//     setSelectedInputs((prevSelectedInputs) => {
//       const updatedInputs = [...prevSelectedInputs];
//       const index = updatedInputs.findIndex(
//         (input) =>
//           input.questionId === currentQuestion && input.inputId === inputId
//       );

//       if (index !== -1) {
//         updatedInputs.splice(index, 1);
//       } else {
//         updatedInputs.push({ questionId: currentQuestion, inputId });
//       }

//       return updatedInputs;
//     });

//     setTotalValue((prevTotalValue) => {
//       const updatedTotalValue = prevTotalValue + inputValue;
//       return updatedTotalValue;
//     });
//   };

//   const isInputSelected = (inputId) => {
//     return selectedInputs.some(
//       (input) => input.questionId === currentQuestion && input.inputId === inputId
//     );
//   };

//   return (
//     <div>
//       <h1>Test</h1>
//       <div>
//         <button
//           onClick={handlePreviousQuestion}
//           disabled={currentQuestion === 0}
//         >
//           Anterior
//         </button>
//         <button
//           onClick={handleNextQuestion}
//           disabled={currentQuestion === questions.length - 1}
//         >
//           Siguiente
//         </button>
//       </div>
//       <div>
//         <h2>Pregunta {currentQuestion + 1}</h2>
//         <p>{questions[currentQuestion].question}</p>
//         {questions[currentQuestion].inputs.map((input) => (
//           <div key={input.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={isInputSelected(input.id)}
//                 onChange={() => handleInputChange(input.id, input.value)}
//               />
//               {input.label}
//             </label>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Total: {totalValue}</h3>
//       </div>
//     </div>
//   );
// };

// export default TestComponent;






import React, { useState } from 'react';

const TestComponent = () => {
  const questions = [
    {
      question: 'Pregunta 1',
      inputs: [
        { id: 1, label: 'Opción 1', value: 10 },
        { id: 2, label: 'Opción 2', value: 20 },
        { id: 3, label: 'Opción 3', value: 30 },
      ],
    },
    {
      question: 'Pregunta 2',
      inputs: [
        { id: 1, label: 'Opción 1', value: 40 },
        { id: 2, label: 'Opción 2', value: 50 },
        { id: 3, label: 'Opción 3', value: 60 },
      ],
    },
    // Agrega las demás preguntas aquí...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleInputChange = (inputId, inputValue) => {
    setSelectedInputs((prevSelectedInputs) => {
      const updatedInputs = [...prevSelectedInputs];
      const index = updatedInputs.findIndex(
        (input) =>
          input.questionId === currentQuestion && input.inputId === inputId
      );

      if (index !== -1) {
        updatedInputs.splice(index, 1);
      } else {
        updatedInputs.push({ questionId: currentQuestion, inputId });
      }

      return updatedInputs;
    });

    setTotalValue((prevTotalValue) => {
      const updatedTotalValue = prevTotalValue + inputValue;
      return updatedTotalValue;
    });
  };

  const isInputSelected = (inputId) => {
    return selectedInputs.some(
      (input) => input.questionId === currentQuestion && input.inputId === inputId
    );
  };

  return (
    <div>
      <h1>Test</h1>
      <div>
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          Siguiente
        </button>
      </div>
      <div>
        <h2>Pregunta {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].inputs.map((input) => (
          <div key={input.id}>
            <label>
              <input
                type="text"
                value={isInputSelected(input.id) ? input.label : ''}
                onChange={() => handleInputChange(input.id, input.value)}
              />
            </label>
          </div>
        ))}
      </div>
      <div>
        <h3>Total: {totalValue}</h3>
      </div>
    </div>
  );
};

export default TestComponent;