import loveMochiGif from "@/assets/love-mochi.gif";
import iLoveYouGif from "@/assets/i-love-you.gif";

const VictoryScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center relative z-10">
      {/* Title */}
      <h1 className="font-display text-5xl md:text-7xl font-black text-valentine-rose animate-bounce-gentle">
        Yayyyy! 🎉
      </h1>

      {/* Cat GIFs side by side */}
      <div className="flex items-center gap-4 md:gap-8 mt-4">
        <img
          src={loveMochiGif}
          alt="Victory kiss"
          className="w-36 h-36 md:w-48 md:h-48 rounded-2xl shadow-xl object-cover animate-fade-in"
        />
        <img
          src={iLoveYouGif}
          alt="I love you"
          className="w-36 h-36 md:w-48 md:h-48 rounded-2xl shadow-xl object-cover animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      {/* Victory message */}
      <div className="mt-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <p className="font-display text-2xl md:text-4xl font-black text-valentine-rose">
          Victory Kiss & Dance! 💃🕺
        </p>
        <p className="font-body text-lg md:text-xl text-valentine-pink max-w-md">
          Nana, you just made me the happiest person alive
        </p>
      </div>

      {/* Sparkle divider */}
      <div className="text-3xl md:text-4xl animate-pulse-heart mt-2">
        ✨💖✨
      </div>

      {/* Glue Song lyrics */}
      <div
        className="bg-valentine-rose/10 backdrop-blur-sm border border-valentine-rose/20 rounded-2xl p-6 md:p-8 max-w-md animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <p className="font-body text-sm text-valentine-pink/60 mb-3 italic">
          🎵 Beabadoobee — Glue Song
        </p>
        <p className="font-body text-base md:text-lg text-valentine-rose leading-relaxed italic">
          "I've never known someone like you
          <br />
          Tangled in love, stuck by you
          <br />
          From the glue
          <br />
          Don't forget to kiss me
          <br />
          Or else you'll have to miss me
          <br />
          I guess I'm stuck forever by the glue"
        </p>
      </div>

      {/* Closing love note */}
      <div
        className="bg-valentine-rose/10 backdrop-blur-sm border border-valentine-rose/20 rounded-2xl p-6 md:p-8 max-w-md animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="font-body text-base md:text-lg text-valentine-rose leading-relaxed">
          Dear Nana, every moment with you feels like magic.
          <br />
          Here's to us — to laughter, love, and all the adventures ahead.
        </p>
        <p className="font-display text-xl md:text-2xl font-black text-valentine-rose mt-4">
          Forever yours 💕
        </p>
      </div>

      {/* Dancing emoji footer */}
      <div className="flex gap-3 text-3xl mt-4 animate-bounce-gentle">
        <span>💃</span>
        <span>🎶</span>
        <span>🕺</span>
        <span>🎶</span>
        <span>💃</span>
      </div>
    </div>
  );
};

export default VictoryScreen;
