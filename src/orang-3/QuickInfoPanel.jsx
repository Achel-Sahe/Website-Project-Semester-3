import "./orang-3.css"
import { Mountain, Droplets, TreePine, PawPrint, Palmtree } from "lucide-react"


const destinations = [
    { id: "Gunung", label: "Gunung", icon: Mountain },
    { id: "Curug", label: "Curug", icon: Droplets },
    { id: "Taman", label: "Taman", icon: TreePine },
    { id: "Kebun Binatang", label: "Kebun Binatang", icon: PawPrint },
    { id: "Pantai", label: "Pantai", icon: Palmtree },
]

function QuickInfoPanel() {
  return (
    <section className="qip-section">
      <div className="qip-inner">
        <h2 className="qip-title">Pilih Destinasi</h2>
        <p className="qip-subtitle">
          Temukan ragam keajaiban alam dari puncak gunung yang sejuk
          hingga deburan ombak pantai yang menenangkan.
        </p>
        <div className="qip-grid">
          {destinations.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.id} className="qip-card">
                <Icon className="qip-icon" />
                <span className="qip-label">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickInfoPanel
