import { Map, BookOpen, Compass } from "lucide-react";
import Title from "./title";
import SubTitle from "./subTitle";

const features = [
  {
    icon: Map,
    title: "Curated Destinations",
    description:
      "Hanya destinasi terbaik yang telah melalui kurasi ketat tim kami, memastikan kualitas dan keunikan pengalaman Anda.",
  },
  {
    icon: BookOpen,
    title: "Authentic Stories",
    description:
      "Narasi yang jujur dan mendalam tentang kearifan lokal, sejarah, dan nilai-nilai yang membuat setiap tempat istimewa.",
  },
  {
    icon: Compass,
    title: "Easy Exploration",
    description:
      "Panduan navigasi yang intuitif dan informasi praktis yang memudahkan perjalanan Anda menjelajahi tanah Priangan.",
  },
];

export default function JelajahiJabar() {
  return (
      <div className="feature-wrapper">
          <Title text={'Mengapa Jelajah Jabar?'} className={'center'} /> <br />
          <SubTitle text={'Kami mengkurasi pengalaman yang tidak hanya memanjakan mata, tapi juga menyentuh jiwa melalui pendekatan editorial yang mendalam.'} className={'center m-auto'}/> <br />
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, description }, i) => (
          <div key={title} className="feature-card" data-aos="fade-up" data-aos-delay={i * 120}>
            <div className="feature-icon-box">
              <Icon className="feature-icon" strokeWidth={1.75} />
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}