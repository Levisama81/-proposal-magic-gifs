import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import chestPainGif from "@/assets/pain-chest-pain.gif";
import minionGif from "@/assets/minions-love.gif";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import RunawayButton from "@/components/valentine/RunawayButton";
import CelebrationScreen from "@/components/valentine/CelebrationScreen";
import VictoryScreen from "@/components/valentine/VictoryScreen";

type Phase = "opening" | "reveal" | "question" | "celebration" | "victory";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("opening");
  const [showSubtext, setShowSubtext] = useState(false);
  const [showRevealText, setShowRevealText] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Opening phase: show subtext after a beat
  useEffect(() => {
    if (phase === "opening") {
      const t = setTimeout(() => setShowSubtext(true), 1500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Reveal phase animations
  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => setShowRevealText(true), 600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Question phase animations
  useEffect(() => {
    if (phase === "question") {
      const t1 = setTimeout(() => setShowQuestion(true), 500);
      const t2 = setTimeout(() => setShowButtons(true), 1200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [phase]);

  const handleAdvance = () => {
    if (phase === "opening") setPhase("reveal");
    else if (phase === "reveal") setPhase("question");
  };

  if (phase === "victory") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-valentine-blush via-valentine-pink/20 to-valentine-rose/10 overflow-hidden">
        <FloatingHearts />
        <VictoryScreen />
      </div>
    );
  }

  if (phase === "celebration") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-valentine-blush via-valentine-pink/20 to-valentine-rose/10 overflow-hidden">
        <FloatingHearts />
        <CelebrationScreen onContinue={() => setPhase("victory")} />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 transition-all duration-1000 overflow-hidden relative cursor-pointer ${
        phase === "opening"
          ? "bg-valentine-dark"
          : "bg-gradient-to-br from-valentine-blush via-valentine-pink/20 to-valentine-rose/10"
      }`}
      onClick={phase !== "question" ? handleAdvance : undefined}
    >
      {/* Floating hearts in later phases */}
      {phase !== "opening" && <FloatingHearts />}

      {/* ===== PHASE 1: OPENING ===== */}
      {phase === "opening" && (
        <div className="flex flex-col items-center gap-6 text-center z-10 animate-fade-in">
          <img
            src={chestPainGif}
            alt="Chest pain"
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl shadow-2xl shadow-valentine-rose/20 object-cover"
          />
          <h1 className="font-display text-4xl md:text-6xl font-black text-valentine-dark-foreground leading-tight">
            Ever since I met you...
          </h1>
          <p
            className={`font-body text-xl md:text-2xl text-valentine-pink transition-all duration-700 ${
              showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            I've had this weird pain in my chest...
          </p>
          <span className="font-body text-sm text-valentine-pink/50 mt-8 animate-pulse">
            tap anywhere to continue
          </span>
        </div>
      )}

      {/* ===== PHASE 2: REVEAL ===== */}
      {phase === "reveal" && (
        <div className="flex flex-col items-center gap-8 text-center z-10 animate-fade-in">
          <div className="text-7xl md:text-8xl animate-pulse-heart">💓</div>
          <h2
            className={`font-display text-3xl md:text-5xl font-black text-valentine-rose leading-tight max-w-lg transition-all duration-700 ${
              showRevealText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Turns out... it's just my heart beating for you 💓
          </h2>
          <span className="font-body text-sm text-valentine-rose/50 mt-6 animate-pulse">
            tap to continue
          </span>
        </div>
      )}

      {/* ===== PHASE 3: QUESTION ===== */}
      {phase === "question" && (
        <div className="flex flex-col items-center gap-6 text-center z-10 animate-fade-in">
          <img
            src={minionGif}
            alt="Minion love"
            className={`w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-2xl shadow-valentine-rose/30 object-cover transition-all duration-500 ${
              showQuestion ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          <h2
            className={`font-display text-4xl md:text-6xl font-black text-valentine-rose transition-all duration-700 ${
              showQuestion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Will you be my Valentine? 🥺
          </h2>

          {/* Buttons */}
          <div
            className={`flex items-center gap-6 mt-6 transition-all duration-500 ${
              showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="bg-valentine-rose hover:bg-valentine-rose/90 text-white font-body font-bold text-lg px-10 py-6 shadow-lg shadow-valentine-rose/30 hover:shadow-xl hover:scale-105 transition-all duration-200"
              onClick={() => setPhase("celebration")}
            >
              Yes! 💕
            </Button>
            <RunawayButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
