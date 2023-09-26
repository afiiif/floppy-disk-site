/* eslint-disable @next/next/no-img-element */

export function BadgeFD() {
  return (
    <>
      <a href="https://pkg-size.dev/floppy-disk" target="_blank" rel="noreferrer">
        <img src="https://pkg-size.dev/badge/bundle/10511" alt="Bundle size for floppy-disk" />
        <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
      </a>
      <div className="whitespace-nowrap pt-1 text-xs">(gzipped 3.8 kB)</div>
    </>
  );
}
export function BadgeZustand() {
  return (
    <a href="https://pkg-size.dev/zustand?no-peers" target="_blank" rel="noreferrer">
      <img src="https://pkg-size.dev/badge/bundle/4875" alt="Bundle size for zustand" />
      <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
    </a>
  );
}
export function BadgeRQ() {
  return (
    <a href="https://pkg-size.dev/@tanstack/react-query?no-peers" target="_blank" rel="noreferrer">
      <img
        src="https://pkg-size.dev/badge/bundle/47262"
        alt="Bundle size for @tanstack/react-query"
      />
      <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
    </a>
  );
}
export function BadgeSWR() {
  return (
    <a href="https://pkg-size.dev/swr?no-peers" target="_blank" rel="noreferrer">
      <img src="https://pkg-size.dev/badge/bundle/11227" alt="Bundle size for swr" />
      <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
    </a>
  );
}

export function Code({ content }: { content: string }) {
  return (
    <code
      className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
      dir="ltr"
    >
      {content}
    </code>
  );
}

export function StoreEvent() {
  return (
    <>
      Store event handler
      <br /> &nbsp; (<Code content="onSubscribe" />, <Code content="onUnsubscribe" />, etc.)
    </>
  );
}
