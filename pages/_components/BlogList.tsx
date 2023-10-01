import Link from 'next/link';

export default function BlogList() {
  return (
    <ol className="pt-10">
      <li>
        <Link
          href="/blog/introducing-floppy-disk"
          className="group block border p-5 hover:border-[hsl(var(--nextra-primary-hue)100%_45%)]"
        >
          <time className="text-sm opacity-60">October 1st, 2023</time>
          <h2 className="text-xl font-bold">Introducing Floppy Disk</h2>
          <p className="pt-2 opacity-80">
            The Zustand-ReactQuery alternative for local, global, sync, or async state management.
            <br />
            Why? & how?
          </p>
          <div className="nx-text-primary-600 pt-4">
            Read more <span className="transition-all group-hover:ml-1.5">→</span>
          </div>
        </Link>
      </li>
    </ol>
  );
}
