
function Flashcard({ card, flipped, setFlipped }) {
    const categoryColors = {
      Geography: "#ffcc00",
      Culture: "#ff6666",
      Literature: "#6699ff",
      Sport:"#ff7f00",
    };
  
    const backgroundColor = categoryColors[card.category] || "#ddd";
  
    return (
      <div className="flashcard" style={{ backgroundColor }}>
        <div className="flashcard-content">
          {flipped ? (
            <div>
              <h3>{card.answer}</h3>
              <button onClick={() => setFlipped(false)}>Flip Back</button>
            </div>
          ) : (
            <div>
              <h3>{card.question}</h3>
              {card.image && <img src={card.image} alt="Flashcard" />}
              <button  className="flip-button" onClick={() => setFlipped(true)}>Flip to Reveal Answer</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Flashcard;
  
  