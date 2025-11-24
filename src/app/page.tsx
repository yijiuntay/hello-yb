import { getConstituencies } from "@/lib/data";
import HomePageClient from "./components/HomePageClient";

export default async function HomePage() {
  const constituencies = await getConstituencies();

  return <HomePageClient constituencies={constituencies} />;
}