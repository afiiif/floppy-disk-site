import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "FloppyDisk.ts Store - SSR" }];
}

export async function loader() {
  await new Promise((r) => setTimeout(r, 2000));
  return {
    foo: 99,
    bar: Math.floor(Math.random() * 100),
  };
}

export default function Ssr({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="pb-7">Initial data: {JSON.stringify(loaderData)}</div>
      <div>SSR</div>
    </>
  );
}
