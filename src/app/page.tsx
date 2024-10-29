import { Home, MainLayout } from "@/core";

export default function HomePage() {
  return (
    <MainLayout>
      <Home.Banner />
      <Home.GetToKnow />
      <Home.WeWantToHear />
      <Home.Employment />
      <Home.Privacy />
    </MainLayout>
  );
}
