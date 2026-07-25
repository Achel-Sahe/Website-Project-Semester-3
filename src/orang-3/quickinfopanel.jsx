import { useNavigate } from "react-router-dom"
import "./orang3.css"
import { Mountain, Droplets, TreePine, PawPrint, Palmtree } from "lucide-react"

const destinations = [
  { id: "gunung", label: "Gunung", icon: Mountain },
  { id: "curug", label: "Curug", icon: Droplets },
  { id: "taman", label: "Taman", icon: TreePine },
  { id: "kebun-binatang", label: "Kebun Binatang", icon: PawPrint },
  { id: "pantai", label: "Pantai", icon: Palmtree },
]

function QuickInfoPanel() {
  const navigate = useNavigate()

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
              <button
                key={item.id}
                className="qip-card"
                onClick={() => navigate(`/destination/${item.id}`)}
              >
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
