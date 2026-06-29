import HomeClient from "@/components/portfolio/home-client";

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "in" },
    { lang: "id" },
  ];
}

export default function Page() {
  return <HomeClient />;
}
