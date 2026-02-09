import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import minionGif from "@/assets/minions-love.gif";
import chestPainGif from "@/assets/pain-chest-pain.gif";
import { NICKNAME } from "@/lib/copy";

interface CelebrationScreenProps {
  onContinue: () => void;
}

const CelebrationScreen = ({ onContinue }: CelebrationScreenProps) => {
  useEffect(() => {
    // Big burst
    const fire = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e11d72", "#f472b6", "#fbbf24", "#fb7185", "#ff69b4"],
      });
    };
    fire();
    const t1 = setTimeout(fire, 400);
    const t2 = setTimeout(fire, 800);

    // Continuous sparkle
    const interval = setInterval(() => {
      confetti({
        particleCount: 15,
        spread: 60,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
        colors: ["#e11d72", "#fbbf24", "#f472b6"],
      });
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center relative z-10">
      <h1 className="font-display text-5xl md:text-7xl font-black text-valentine-rose animate-bounce-gentle">
        I knew you'd say yes! 🥰
      </h1>
      <p className="font-body text-xl md:text-2xl text-valentine-pink mt-2">
        (You can't resist me)
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <img
          src={chestPainGif}
          alt="Chest pain GIF"
          className="w-40 h-40 md:w-52 md:h-52 rounded-2xl shadow-xl object-cover"
        />
        <div className="text-6xl animate-pulse-heart">💘</div>
        <img
          src={minionGif}
          alt="Minion love GIF"
          className="w-40 h-40 md:w-52 md:h-52 rounded-2xl shadow-xl object-cover"
        />
      </div>

      <p className="font-body text-lg text-valentine-pink/80 mt-8 max-w-md">
        Happy Valentine's Day, {NICKNAME} 💕
      </p>

      <Button
        size="lg"
        className="bg-valentine-rose hover:bg-valentine-rose/90 text-white font-body font-bold text-lg px-10 py-6 shadow-lg shadow-valentine-rose/30 hover:shadow-xl hover:scale-105 transition-all duration-200 mt-4 animate-pulse"
        onClick={onContinue}
      >
        One more surprise... ✨
      </Button>
    </div>
  );
};

export default CelebrationScreen;
