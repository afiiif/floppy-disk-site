/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  docsRepositoryBase: 'https://github.com/afiiif/floppy-disk-site/blob/main',
  project: { link: 'https://github.com/afiiif/floppy-disk' },
  logo: (
    <div className="group flex items-center gap-3 py-2.5 pr-2.5 text-xl font-bold">
      <div className="-rotate-12 transition-transform group-hover:rotate-12 group-hover:scale-125">
        💾
      </div>
      <div>Floppy Disk</div>
    </div>
  ),
  useNextSeoProps: () => ({
    titleTemplate: '%s – Floppy Disk',
  }),
};

export default themeConfig;
