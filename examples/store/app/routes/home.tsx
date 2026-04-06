import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "FloppyDisk.ts Store" }];
}

export default function Home() {
  return (
    <>
      <div>Home</div>
    </>
  );
}
