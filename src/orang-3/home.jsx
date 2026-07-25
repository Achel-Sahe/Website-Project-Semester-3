import Hero from "../orang-1/hero"
import QuickInfoPanel from "./QuickInfoPanel"
import ExperienceCard from "./ExperienceCard"
import MapSection from "./MapSection"
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
