import Hero from "../orang-1/hero"
import QuickInfoPanel from "./quickinfopanel"
import ExperienceCard from "./experiencecard"
import MapSection from "./mapsection"
import { GUNUNG_CIREMAI } from "./data"

export default function Home() {
  return (
    <main>
      <Hero />

      <QuickInfoPanel />

      <ExperienceCard />

      <MapSection {...GUNUNG_CIREMAI} />
    </main>
  )
}
