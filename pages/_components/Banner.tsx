export default function Banner() {
  return (
    <>
      <div className="absolute left-0 z-10 -mt-4 w-full overflow-x-hidden border-b border-b-gray-200 dark:border-b-gray-800">
        <div className="bg-[radial-gradient(var(--tw-gradient-stops))] from-white dark:from-black">
          <div className="animate-trigger mx-auto max-w-6xl px-6 py-24 text-center md:px-12 xl:py-28">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute w-full bg-gradient-to-br from-white/0 to-black/30 bg-clip-text pb-4 text-4xl font-extrabold text-transparent md:text-5xl xl:text-6xl"
              >
                2.9 kB Powerful
                <div>[Global/Local, Sync/Async]</div>
                State Management Library
              </div>
            </div>
            <h1 className="text-4xl font-extrabold md:text-5xl xl:text-6xl">
              2.9 kB Powerful
              <div className="text-green-600 dark:text-green-400">[Global/Local, Sync/Async]</div>
              State Management Library
            </h1>
            <div className="animate-shake pt-6 text-xs opacity-40">
              Yes, another state management library alternative 👀
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-[-1] h-full w-[calc(100%_+_32px)] translate-x-0 bg-grid" />
      </div>

      <style jsx>
        {`
          .animate-trigger:hover > :global(.animate-shake) {
            animation: tilt-n-move-shaking 0.15s infinite;
            opacity: 80%;
          }
          @keyframes tilt-n-move-shaking {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(2px, 2px) rotate(0.5deg); }
            50% { transform: translate(0, 0) rotate(0eg); }
            75% { transform: translate(-2px, 2px) rotate(-0.5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .bg-grid {
            animation: grid-moving 1s infinite linear;
          }
          @keyframes grid-moving {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-32px, 0); }
          }
        `}
      </style>

      {/* For spacer only */}
      <div className="invisible -mt-4 mb-8 py-24 text-center md:mb-12 xl:-mx-16 xl:py-28">
        <div className="text-4xl font-extrabold md:text-5xl xl:text-6xl">
          2.9 kB Powerful
          <div>[Global/Local, Sync/Async]</div>
          State Management Library
        </div>
        <div className="pt-6 text-xs opacity-70">
          Yes, another state management library alternative 👀
        </div>
      </div>
    </>
  );
}
