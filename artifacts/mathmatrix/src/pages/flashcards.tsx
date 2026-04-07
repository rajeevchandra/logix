import React, { useState } from "react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Plus, Flame, Brain, X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FlashCard {
  subject: string;
  front: string;
  back: string;
}

interface Deck {
  title: string;
  desc: string;
  cards: number;
  mastery: number;
  color: string;
  textColor: string;
  studyCards: FlashCard[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const DECKS: Deck[] = [
  {
    title: "Linear Algebra",
    desc: "Foundations of algebra: Linear equations, slope-intercept form, and basic variables",
    cards: 20,
    mastery: 68,
    color: "bg-blue-100",
    textColor: "text-blue-700",
    studyCards: [
      { subject: "Algebra", front: "Find the y-intercept of the equation:\ny = 3x − 5", back: "The y-intercept is −5\nor the point (0, −5)" },
      { subject: "Algebra", front: "Factor the following quadratic:\nx² − 9", back: "(x − 3)(x + 3)\n(Difference of Squares)" },
      { subject: "Algebra", front: "What is the slope of the line:\n2y = 4x + 10?", back: "Slope = 2\n(Divide both sides by 2: y = 2x + 5)" },
      { subject: "Algebra", front: "Solve for x:\n3x + 12 = 45", back: "x = 11\n(Subtract 12: 3x = 33, divide by 3)" },
    ],
  },
  {
    title: "Algebra II",
    desc: "Logarithmic functions, complex numbers, and transformations of polynomial graphs.",
    cards: 86,
    mastery: 45,
    color: "bg-orange-100",
    textColor: "text-orange-700",
    studyCards: [
      { subject: "Algebra", front: "What is log₂(8)?", back: "3\n(Because 2³ = 8)" },
      { subject: "Algebra", front: "Simplify: √72", back: "6√2\n(72 = 36 × 2, so √72 = 6√2)" },
      { subject: "Algebra", front: "Expand: (x + 3)²", back: "x² + 6x + 9\n(FOIL: x² + 3x + 3x + 9)" },
    ],
  },
  {
    title: "Trigonometry",
    desc: "Sine, Cosine, and Tangent identities with practical wave applications.",
    cards: 210,
    mastery: 92,
    color: "bg-green-100",
    textColor: "text-green-700",
    studyCards: [
      { subject: "Algebra", front: "What is sin(30°)?", back: "1/2\n(Standard unit circle value)" },
      { subject: "Algebra", front: "What is cos(0°)?", back: "1\n(cos(0) is always 1)" },
      { subject: "Algebra", front: "What is tan(45°)?", back: "1\n(sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1)" },
    ],
  },
];

// ─── Study Mode (full-screen card viewer) ────────────────────────────────────

function StudyMode({ deck, onExit }: { deck: Deck; onExit: () => void }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const card = deck.studyCards[cardIndex];
  const totalCards = 20; // displayed total as per PDF "Card 4 of 20"
  const displayIndex = cardIndex + 1;

  function handleNext() {
    if (cardIndex < deck.studyCards.length - 1) {
      setCardIndex(c => c + 1);
      setShowAnswer(false);
    }
  }

  function handlePrev() {
    if (cardIndex > 0) {
      setCardIndex(c => c - 1);
      setShowAnswer(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-bold text-gray-900">Logix</span>
          <span className="text-gray-300">|</span>
          <span className="text-[14px] font-semibold text-gray-600">Study Mode</span>
        </div>
        <span className="text-[14px] text-gray-500">Card {displayIndex} of {totalCards}</span>
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-800 transition-colors"
        >
          Exit <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-100">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${(displayIndex / totalCards) * 100}%` }}
        />
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-lg">
          {/* Subject tag */}
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wide">
              {card.subject}
            </span>
          </div>

          {/* Card */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-lg p-10 text-center min-h-[280px] flex flex-col items-center justify-center mb-8">
            {!showAnswer ? (
              <>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                  Problem Definition
                </div>
                <div className="text-[22px] font-bold text-gray-900 leading-snug whitespace-pre-line mb-8">
                  {card.front}
                </div>
                <button
                  onClick={() => setShowAnswer(true)}
                  className="text-[14px] font-semibold text-primary border-b-2 border-primary pb-0.5 hover:text-primary/80 transition-colors"
                >
                  Show Answer
                </button>
              </>
            ) : (
              <>
                <div className="text-[11px] font-bold text-primary uppercase tracking-widest mb-6">
                  Answer
                </div>
                <div className="text-[22px] font-bold text-gray-900 leading-snug whitespace-pre-line mb-8">
                  {card.back}
                </div>
                <button
                  onClick={() => setShowAnswer(false)}
                  className="text-[14px] font-semibold text-gray-400 border-b border-gray-300 pb-0.5 hover:text-gray-600 transition-colors"
                >
                  Show Answer
                </button>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={cardIndex === 0}
              className={`flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-xl transition-colors ${
                cardIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <button
              onClick={() => { setCardIndex(0); setShowAnswer(false); }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Restart"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              disabled={cardIndex === deck.studyCards.length - 1}
              className={`flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-xl transition-colors ${
                cardIndex === deck.studyCards.length - 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Create New Deck Modal ────────────────────────────────────────────────────

interface NewCard {
  front: string;
  back: string;
}

function CreateDeckModal({ onClose }: { onClose: () => void }) {
  const [deckTitle, setDeckTitle] = useState("Quadratic Equations Mastery");
  const [category, setCategory] = useState("Algebra");
  const [cards, setCards] = useState<NewCard[]>([
    { front: "", back: "x = [-b ± sqrt(b² - 4ac)] / 2a" },
  ]);

  function addCard() {
    setCards(c => [...c, { front: "", back: "" }]);
  }

  function updateCard(index: number, field: "front" | "back", value: string) {
    setCards(prev => prev.map((c, i) => i === index ? { ...c, [field]: value } : c));
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-[17px] font-bold text-gray-900">Create New Deck</h2>
          <p className="text-[13px] text-gray-500 mt-0.5">Build a structured study sequence!</p>
        </div>

        <div className="p-6 space-y-5">
          {/* Deck title + category row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Deck Title</label>
              <input
                value={deckTitle}
                onChange={e => setDeckTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="e.g. Quadratic Equations Mastery"
              />
            </div>
            <div className="w-36">
              <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-[13px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option>Algebra</option>
                <option>Geometry</option>
                <option>Pre-Calculus</option>
                <option>Calculus</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-[12px] font-semibold text-gray-700">Flashcards ({cards.length})</label>
            </div>
            <div className="space-y-4">
              {cards.map((card, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl p-4 space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Front of Card</label>
                    <textarea
                      rows={2}
                      value={card.front}
                      onChange={e => updateCard(i, "front", e.target.value)}
                      placeholder="e.g. State the quadratic formula."
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Back of Card</label>
                    <textarea
                      rows={2}
                      value={card.back}
                      onChange={e => updateCard(i, "back", e.target.value)}
                      placeholder="x = [-b ± sqrt(b² - 4ac)] / 2a"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addCard}
              className="mt-3 w-full border border-dashed border-gray-300 text-[13px] font-semibold text-gray-500 py-2.5 rounded-xl hover:border-primary/40 hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add New Card
            </button>
          </div>

          {/* Tip */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-[12px] text-gray-600">
            💡 Decks with 20+ cards show a <strong>15% increase</strong> in retention rates.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors text-[14px]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-[14px]"
          >
            Create Deck
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Flashcards Page ─────────────────────────────────────────────────────

export function Flashcards() {
  const [studyDeck, setStudyDeck] = useState<Deck | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      {studyDeck && <StudyMode deck={studyDeck} onExit={() => setStudyDeck(null)} />}
      {showCreateModal && <CreateDeckModal onClose={() => setShowCreateModal(false)} />}

      <div className="bg-white min-h-screen pb-20">
        <div className="max-w-[1440px] mx-auto px-8 pt-10">
          <div className="flex gap-10">
            <ResourceSidebar />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Interactive Flashcards</h1>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center gap-2 bg-primary text-white text-[13px] font-semibold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Create New Deck
                </button>
              </div>
              <p className="text-gray-500 text-[14px] mb-8">
                Master complex concepts through active recall and spaced repetition. Stay consistent to boost your long-term memory.
              </p>

              {/* Stats row */}
              <div className="flex gap-5 mb-8">
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="text-[13px] text-gray-500 mb-1">Daily Progress</div>
                  <div className="text-3xl font-bold text-gray-900 mb-0.5">42 <span className="text-[16px] text-gray-400">/ 50</span></div>
                  <div className="text-[12px] text-gray-400">New Concepts Mastered Today</div>
                  <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "84%" }} />
                  </div>
                </div>

                <div className="w-44 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center">
                  <Flame className="w-8 h-8 text-orange-500 mb-2" />
                  <div className="text-3xl font-bold text-gray-900">12</div>
                  <div className="text-[12px] text-gray-500">Days Streak</div>
                  <div className="text-[11px] text-primary font-medium mt-1">Consistency Streak</div>
                </div>

                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="text-[13px] font-bold text-gray-900 mb-2">Quick Review</div>
                  <div className="text-[12px] text-gray-500 mb-4">
                    The following cards are due for repetition according to your spaced learning schedule.
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-semibold text-red-600">Critical Review</div>
                      <div className="text-[13px] font-bold text-gray-900">18 <span className="text-[11px] text-gray-400 font-normal">Due Now</span></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-semibold text-amber-600">Needs Practice</div>
                      <div className="text-[13px] font-bold text-gray-900">34 <span className="text-[11px] text-gray-400 font-normal">Due in 4h</span></div>
                    </div>
                  </div>
                  <button
                    onClick={() => setStudyDeck(DECKS[0])}
                    className="w-full bg-primary text-white text-[13px] font-semibold py-2 rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Start Session
                  </button>
                </div>
              </div>

              {/* Memory hack tip */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
                <Brain className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <div className="text-[13px] font-bold text-gray-900 mb-1">Memory Hack — Visualizing Integration</div>
                  <p className="text-[13px] text-gray-600">
                    Recent data shows you master calculus cards 40% faster when viewing the area-under-curve graphs. We've added 15 new visual proofs to your Calculus deck.
                  </p>
                </div>
              </div>

              {/* Decks grid */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[15px] font-bold text-gray-900">Your Decks</h2>
                <div className="flex items-center gap-2 text-[13px] text-gray-500">
                  Sort by: <span className="text-gray-900 font-medium cursor-pointer">Recently Studied</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {DECKS.map(deck => (
                  <div key={deck.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`${deck.color} ${deck.textColor} text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-3`}>
                      {deck.mastery}% Mastery
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">{deck.title}</h3>
                    <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">{deck.desc}</p>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${deck.mastery}%` }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-400">{deck.cards} Cards</span>
                      <button
                        onClick={() => setStudyDeck(deck)}
                        className="bg-primary/10 text-primary text-[13px] font-semibold px-4 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        Study Now
                      </button>
                    </div>
                  </div>
                ))}

                {/* Create new deck card */}
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-[14px] font-semibold text-gray-500 group-hover:text-gray-700 mb-1">Create New Deck</div>
                  <div className="text-[12px] text-gray-400">Import from PDF or start fresh</div>
                </button>
              </div>

              {/* Memory strength */}
              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <h3 className="text-[14px] font-bold text-gray-900">Memory Strength — 72%</h3>
                </div>
                <p className="text-[13px] text-gray-500 mb-3">Your memory retention is higher than last week.</p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <div className="text-[12px] font-semibold text-gray-700 mb-1">Study Tip</div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Try to link new flashcards to concepts you already know. This "Elaborative Rehearsal" makes it 3x easier to recall later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
