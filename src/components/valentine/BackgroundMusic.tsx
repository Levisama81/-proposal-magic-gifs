import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const tryPlay = () => {
      if (hasStarted.current) return;
      const audio = audioRef.current;
      if (!audio) return;
      
      audio.volume = 0.4;
      audio.play().then(() => {
        hasStarted.current = true;
        // Clean up listeners once playing
        document.removeEventListener("click", tryPlay);
        document.removeEventListener("touchstart", tryPlay);
        document.removeEventListener("touchend", tryPlay);
      }).catch(() => {
        // Will retry on next interaction
      });
    };

    document.addEventListener("click", tryPlay);
    document.addEventListener("touchstart", tryPlay);
    document.addEventListener("touchend", tryPlay);

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("touchend", tryPlay);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/music/glue-song.mp3" loop preload="auto" playsInline />
  );
};

export default BackgroundMusic;
