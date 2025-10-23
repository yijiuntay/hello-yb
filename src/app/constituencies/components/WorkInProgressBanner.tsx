export default function WorkInProgressBanner() {
  return (
    <div className="bg-yellow-300 border-y-4 border-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-yellow-300 text-xl animate-pulse">
            ⚠
          </div>
          <p className="text-black text-xs md:text-sm font-bold text-center">
            🚧 UNDER CONSTRUCTION • Data being verified and updated 🚧
          </p>
        </div>
      </div>
    </div>
  );
}
