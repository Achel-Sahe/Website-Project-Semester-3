import { Link } from "react-router-dom"
import { Mountain, Droplets, TreePine, PawPrint, Palmtree } from "lucide-react"
import { dataWisata } from "../data/dataWisata"

const iconMap = {
  Mountain, Droplets, TreePine, PawPrint, Palmtree
}

const destinations = dataWisata.qipDestinations.map((d) => ({
  ...d,
  icon: iconMap[d.icon]
}))

function QuickInfoPanel() {
  return (
    <section className="qip-section" data-aos="fade-up">
      <div className="qip-inner">
        <h2 className="qip-title" data-aos="fade-down">Pilih Destinasi</h2>
        <p className="qip-subtitle" data-aos="fade-up">
          Temukan ragam keajaiban alam dari puncak gunung yang sejuk
          hingga deburan ombak pantai yang menenangkan.
        </p>
        <div className="qip-grid">
          {destinations.map((item, i) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                to={`/destination?filter=${encodeURIComponent(item.id)}`}
                className="qip-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Icon className="qip-icon" />
                <span className="qip-label">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickInfoPanel
