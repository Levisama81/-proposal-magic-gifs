import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";

interface RunawayButtonProps {
  onNoInteraction?: () => void;
}

const RunawayButton = ({ onNoInteraction }: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = useCallback(() => {
    onNoInteraction?.();
    const maxX = window.innerWidth * 0.6;
    const maxY = window.innerHeight * 0.5;
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;
    setPosition({ x: newX, y: newY });
    setScale((prev) => Math.max(prev * 0.9, 0.5));
  }, [onNoInteraction]);

  return (
    <div ref={containerRef} className="relative" style={{ zIndex: 10 }}>
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-valentine-pink/50 bg-transparent text-valentine-pink font-body font-bold text-lg px-8 py-6 transition-all duration-300 cursor-pointer hover:bg-valentine-pink/10"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={dodge}
        onTouchStart={dodge}
        onClick={dodge}
      >
        No 😢
      </Button>
    </div>
  );
};

export default RunawayButton;
