import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default function Meta() {
  const { frontMatter } = useConfig();
  const { locale } = useRouter();

  const timestamp = new Date(frontMatter.date);

  return (
    <header className="pt-8 text-sm">
      <time dateTime={frontMatter.date} className="opacity-60">
        {frontMatter.dateDisplay}
      </time>
      <span className="opacity-60"> – by </span>
      <span className="inline-flex space-x-2.5">
        {frontMatter.author.map(({ name, link }: any) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="relative underline opacity-60 after:absolute after:translate-x-0.5 after:content-[','] last:after:content-[''] hover:opacity-90"
          >
            {name}
          </a>
        ))}
      </span>
    </header>
  );
}
