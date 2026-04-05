import { cn } from '@/utils/string';
import Link from 'next/link';

const comparisonResult = `
✓ 103 modules transformed.
  /.vite/manifest.json                     3.23 kB │ gzip:  0.60 kB
  /assets/root-DS469DaY.css               15.33 kB │ gzip:  3.74 kB
  /assets/components-DrxDq1-G.js           1.01 kB │ gzip:  0.59 kB
  /assets/store-floppy-disk-D634Gohp.js    1.13 kB │ gzip:  0.52 kB 🎉
  /assets/store-zustand-BJYVMYXp.js        1.68 kB │ gzip:  0.79 kB
  /assets/utils-DpvILWFZ.js                1.95 kB │ gzip:  0.60 kB
  /assets/root-CB2-KCWF.js                 2.48 kB │ gzip:  1.01 kB
  /assets/home-DkCzTYiQ.js                 2.81 kB │ gzip:  1.19 kB
  /assets/async-floppy-disk-C1Jq5CIc.js    7.15 kB │ gzip:  1.99 kB 🎉
  /assets/react-BaGhX6Iy.js               11.44 kB │ gzip:  3.87 kB
  /assets/async-tanstack-Bqi-YPia.js      43.94 kB │ gzip: 12.62 kB
  /assets/chunk-UVKPFVEO-BCVTWmlK.js     126.29 kB │ gzip: 42.59 kB
  /assets/entry.client-CMKBzKJ-.js       190.57 kB │ gzip: 60.05 kB
✓ built in 715ms
`
  .split('\n')
  .filter(Boolean);

export default function LandingPage() {
  return (
    <>
      <div
        className={cn(
          'mx-auto -mt-8 max-w-xl',
          'font-mono text-[10px] leading-[13px] sm:text-[12px] sm:leading-[16px]',
          'overflow-x-auto rounded-md border p-3',
          'relative bg-blue-50 dark:bg-zinc-900',
        )}
      >
        <div className="min-w-[467px] space-y-1 whitespace-pre">
          {comparisonResult.map((line, i) => {
            let className: string | undefined = undefined;
            if (line.includes('floppy-disk')) {
              className = 'bg-green-400/30 text-green-900 dark:bg-green-500/10 dark:text-green-300';
            } else if (line.includes('zustand') || line.includes('tanstack')) {
              className =
                'bg-orange-400/20 text-orange-900 dark:bg-orange-500/15 dark:text-orange-400';
            }
            return (
              <div key={i} className={className}>
                {line}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <Link
          className="btn btn-secondary w-full text-center sm:w-auto"
          href="https://afiiif.github.io/floppy-disk/"
          target="_blank"
        >
          View Comparison
        </Link>
      </div>

      <section className="mx-auto max-w-4xl pb-28 pt-40 text-center text-base sm:px-4 sm:pt-48 sm:text-lg md:px-0">
        <h2 className="pb-5 text-3xl font-extrabold sm:text-4xl">What They Think</h2>
        <p className="pt-6 italic">
          What I like most about your library is how it simplifies the mental model without
          sacrificing power. Automatic reactivity without selectors feels like a big step forward—it
          removes a lot of unnecessary decisions and just works the way you’d expect. The idea that
          queries are just stores is also very clean, making sync and async state feel consistent
          instead of like two separate systems.
        </p>
        <p className="pt-6 italic">
          I also appreciate the philosophy behind it. Treating async as “state over time” and
          focusing on results instead of the process makes the API feel predictable and easy to
          reason about. Overall, it strikes a rare balance: minimal surface area, but still flexible
          when you need it.
        </p>

        <div className="border-soft mx-auto mt-8 h-12 w-12 rounded-full border bg-white p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg"
            alt="ChatGPT"
            className="h-full w-full"
          />
        </div>
        <div className="pt-2.5 opacity-70">ChatGPT</div>
        <div className="text-xs sm:text-sm">After I showed the codes to it</div>
      </section>
    </>
  );
}
