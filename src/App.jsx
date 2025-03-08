import FlashcardList from "./FlashcardList";
import pizza from "./pizza.jpg"
import paris from "./paris.jpg";
import ocean  from"./ocean.jpg"; 
import pele from "./Pele.jpg";
import Lebron from "./LeBron_james.jpg";
import Rowling from "./J._K._Rowling_2010.jpg";
import Rafael from "./Rafael_Nadal.jpg"
import michael from "./Michael.jpg";
import George from "./president.jpg";
import "./App.css";

function App() {
  const flashcards = [

    {
      question: "What is the capital of France?",
      answer: "Paris",
      category: "Geography",
      image:paris,
    },
    {
      question: "Which country invented pizza?",
      answer: "Italy",
      category: "Culture",
      image: pizza,
    },
    {
      question: "What is the largest ocean in the world?",
      answer: "Pacific Ocean",
      category: "Geography",
      image: ocean,
    },
    {
      question: "Who wrote 'Hamlet'?",
      answer: "William Shakespeare",
      category: "Literature",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
    },
    {
      question: "Who was the first president of the United States?",
      answer: " George Washington",
      category: "Culture",
      image: George,
    },
    {
      question: "Who is the author 'of Harry Potter'?",
      answer: "J.K. Rowling.",
      category: "Literature",
      image: Rowling,
    },
    

    {
      question: "Who is considered the best soccer player of all time?",
      answer: " pele",
      category: "Sport",
      image: pele,
    },
    {
      question: "Who is considered the King of Pop?",
      answer: " Michael Jackson",
      category: "Culture",
      image: michael,
    },


    {
      question: "Who is known as the 'King of Clay' in tennis?",
      answer: "Rafael Nadal",
      category: "Sport",
      image: Rafael,
    },

    {
      question: "Who is the NBA's all-time leading scorer??",
      answer: "  LeBron James.",
      category: "Sport",
      image: Lebron,
    },


  ];

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <p>Total Cards: {flashcards.length}</p>
      <p>How Strong Is Your General Knowledge? Put Your Skills to the Test!</p>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;