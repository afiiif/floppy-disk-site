import Link from 'next/link';

export default function BlogList() {
  return (
    <ol className="space-y-8 pt-10">
      <li>
        <Link
          href="/blog/introducing-floppy-disk"
          className="group block border p-5 hover:border-[hsl(var(--nextra-primary-hue)100%_45%)]"
        >
          <time className="text-sm opacity-60">6 April 2026</time>
          <h2 className="text-xl font-bold">(Re)Introducing FloppyDisk.ts</h2>
          <p className="pt-2 opacity-80">
            A side project from 2023, rebuilt in 2026 with fine-grained reactivity, smarter async
            handling, and a simpler way to do infinite scroll without `useInfiniteQuery`.
          </p>
          <div className="nx-text-primary-600 pt-4">
            Read more <span className="transition-all group-hover:ml-1.5">→</span>
          </div>
        </Link>
      </li>
    </ol>
  );
}
