import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Flashcard />
    </div>
  );
}

const cards = [
  {
    id: 1,
    question: "What is the Smallest counrty in the world",
    answer: "Vatican City",
  },
  {
    id: 2,
    question: "Tallest mountain in Afica",
    answer: "Kilimanjaro",
  },
  {
    id: 3,
    question: "Biggest aircraft ever made",
    answer: "Antonov An-225 Mriya",
  },
  {
    id: 4,
    question: "What is photohive",
    answer: "Career platform for artist",
  },
  {
    id: 5,
    question: "Biggest dream I chase everyday",
    answer: "Build Photohive",
  },
  {
    id: 6,
    question: "I will buy the domain next month",
    answer: "photohive.io",
  },
];

function Header() {
  return <header>Simple FlashCards layout</header>;
}

function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div>
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={card.id === selectedId ? "selected" : ""}
          >
            {card.id === selectedId ? card.answer : card.question}
          </div>
        ))}
      </div>
    </div>
  );
}
