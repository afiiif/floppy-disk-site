const BASE_URL =
  'https://codesandbox.io/p/sandbox/github/afiiif/floppy-disk-site/tree/main/examples';

type Props = {
  path: string;
  file?: string;
};
export default function Sandbox({ path, file = '/index.jsx' }: Props) {
  return (
    <iframe
      style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        width: '100%',
        height: 'calc(100vh - 8rem)',
        minHeight: '36rem',
        overflow: 'hidden',
        background: 'rgb(21, 21, 21)',
        margin: '1rem 0',
      }}
      src={`${BASE_URL}/${path}?embed=1&autoresize=1&hidenavigation=1&file=${file}`}
      allowFullScreen
    />
  );
}
