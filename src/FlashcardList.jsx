import { useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // Track flip state

  const nextCard = () => {
    // Use a callback to ensure the state update happens correctly
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex); 
    setFlipped(false); // Reset flip state when changing cards
  };

  return (
    <div className="flashcard-container">
      {/* Pass flipped and setFlipped to Flashcard */}
      <Flashcard 
        card={flashcards[currentIndex]} 
        flipped={flipped} 
        setFlipped={setFlipped} 
      />
      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default FlashcardList;
