import { useEffect, useRef, useState } from 'react';
import { createStore } from 'floppy-disk';

import { cn } from '@/utils/string';

import { useMyStore } from './store';

function RenderCounter() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div
      key={renderCount.current % 2}
      className="absolute right-0 top-0 -translate-y-3 translate-x-3 text-black"
    >
      <div
        className="absolute top-0 h-6 w-6 animate-ping rounded-full bg-yellow-300/90 dark:bg-yellow-300/50"
        style={{ animationIterationCount: 1 }}
      />
      <div className="render-count relative flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 px-2 text-[0] hover:w-auto hover:text-xs">
        Render: {renderCount.current}
      </div>
      <style jsx>
        {`
          .render-count {
            animation: changeBgColor 0.5s;
          }
          @keyframes changeBgColor {
            0% { background-color: rgb(234 179 8 / var(--tw-bg-opacity)); }
            50% { background-color: rgb(190 18 60 / var(--tw-bg-opacity)); }
            100% { background-color: rgb(234 179 8 / var(--tw-bg-opacity)); }
          }
        `}
      </style>
    </div>
  );
}

function Card1() {
  const { count, shape } = useMyStore();
  return (
    <div className="w-full sm:w-auto sm:flex-1">
      <RenderCounter />
      <div>Count: {count}</div>
      <div>Shape: {shape}</div>
    </div>
  );
}

function Card2() {
  const { count } = useMyStore((state) => [state.count]);
  return (
    <div className="flex-1 sm:-translate-y-12">
      <RenderCounter />
      <div>Count: {count}</div>
    </div>
  );
}

function Card3() {
  const { shape } = useMyStore((state) => [state.shape]);
  return (
    <div className="flex-1">
      <RenderCounter />
      <div>Shape: {shape}</div>
    </div>
  );
}

function Card4() {
  const { increment, changeShape } = useMyStore.get();
  return (
    <div className="flex-1">
      <RenderCounter />
      <button className="btn w-full px-2" onClick={increment}>
        Increment
      </button>
      <button className="btn mt-3 w-full px-2" onClick={changeShape}>
        Change Shape
      </button>
    </div>
  );
}

const useCard5 = createStore(() => ({ isMuted: true }));

function Card5() {
  const { count, shape } = useMyStore.get();
  const { isMuted } = useCard5();
  const [, reRender] = useState<any>();

  useEffect(() => {
    if (!isMuted) {
      return useMyStore.subscribe(reRender);
    }
  }, [isMuted]);

  return (
    <div className="flex-1 sm:translate-y-12">
      <RenderCounter />
      <button
        className="btn mb-3 w-full px-2"
        onClick={() => useCard5.set((prev) => ({ isMuted: !prev.isMuted }))}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <div className="flex items-center gap-4">
        <div className="pl-2 text-xl">{isMuted ? '🔕' : '🔔'}</div>
        <div className={cn(isMuted && 'opacity-50')}>
          <div>Count: {count}</div>
          <div>Shape: {shape}</div>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="w-full sm:w-auto sm:flex-1">
      <RenderCounter />
      <button
        className="btn w-full px-2"
        onClick={() => alert(JSON.stringify(useMyStore.get(), null, 2))}
      >
        Get State
      </button>
      <button
        className="btn mt-3 w-full px-2"
        onClick={() => useMyStore.set((prev) => ({ count: prev.count + 1 }), true)}
      >
        Increment Silently
      </button>
    </div>
  );
}

function Lines() {
  const { isMuted } = useCard5();
  return (
    <>
      <svg viewBox="0 0 80 40" className="absolute -top-24 h-[32rem] sm:hidden sm:h-96" fill="none">
        <path d="M40,16 L40,0" className="path moving" />
        <path d="M37,14 L30,14 L30,7" className="path moving" />
        <path d="M44,14 L50,14 L50,7" className="path moving" />
        <path d="M30,31 L30,18 L37,18" className="path" />
        <path d="M40,18 L40,40" className="path" />
        {isMuted ? (
          <path d="M44,18 L50,18 L50,31" className="path" />
        ) : (
          <path d="M44,18 L50,18 L50,31" className="path moving" />
        )}
      </svg>
      <svg
        viewBox="0 0 80 40"
        className="absolute -top-24 hidden h-[32rem] sm:block sm:h-96"
        fill="none"
      >
        <path d="M40,16 L40,4" className="path moving" />
        <path d="M37,17 L22,17 L14,9" className="path moving" />
        <path d="M44,17 L59,17 L67,9" className="path moving" />
        <path d="M14,31 L22,23 L37,23" className="path" />
        <path d="M44,23 L59,23 L67,31" className="path" />
        {isMuted ? (
          <path d="M40,24 L40,36" className="path" />
        ) : (
          <path d="M40,24 L40,36" className="path moving" />
        )}
      </svg>
      <style jsx>
        {`
          .path {
            stroke: #22c55e;
            stroke-width: 0.18;
            stroke-dasharray: 0.8;
          }
          .moving {
            animation: movingDashedLine 20s infinite linear;
          }
          @keyframes movingDashedLine {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
        `}
      </style>
    </>
  );
}

export default function Demo() {
  return (
    <section className="relative -mx-6 overflow-x-hidden px-6 py-10 sm:py-24">
      <div className="flex flex-wrap gap-9 text-sm md:gap-12 [&>*]:relative [&>*]:rounded-md [&>*]:border [&>*]:bg-white [&>*]:p-4 dark:[&>*]:bg-black">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div className="relative -z-10 flex justify-center">
        <Lines />
      </div>
      <div className="flex justify-center py-16 sm:py-12">
        <div className="rounded-md border bg-white px-6 py-8 text-center text-xl font-semibold dark:bg-black">
          Store
        </div>
      </div>
      <div className="flex flex-wrap gap-9 text-sm md:gap-12 [&>*]:relative [&>*]:rounded-md [&>*]:border [&>*]:bg-white [&>*]:p-4 dark:[&>*]:bg-black">
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </section>
  );
}
