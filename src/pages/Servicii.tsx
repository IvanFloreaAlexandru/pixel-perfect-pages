import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import {
  Truck,
  Wrench,
  Car,
  Battery,
  Fuel,
  Clock,
  Shield,
  UserCheck,
  Check,
  Zap,
} from "lucide-react";

// Importul imaginilor specifice
import imgTractari from "@/assets/serviciu-tractare.jpg";
import imgAsistenta from "@/assets/serviciu-asistenta.jpg";
import imgPlatforma from "@/assets/serviciu-platforma.jpg";
import imgBaterie from "@/assets/serviciu-baterie.jpg";
import imgCombustibil from "@/assets/serviciu-combustibil.jpg";

const services = [
  {
    icon: Truck,
    title: "Tractări Auto Non-Stop",
    image: imgTractari,
    description:
      "Servicii rapide de tractare pentru autoturisme, SUV-uri și autoutilitare, disponibile la orice oră din zi sau noapte.",
    features: [
      "Disponibilitate 24/7",
      "Tractări SUV & 4x4",
      "Recuperare vehicule avariate",
    ],
  },
  {
    icon: Wrench,
    title: "Asistență Rutieră",
    image: imgAsistenta,
    description:
      "Intervenții rapide la fața locului pentru defecțiuni mecanice ce nu necesită transport la service.",
    features: [
      "Diagnoză la fața locului",
      "Reparații rapide",
      "Deblocare vehicule",
    ],
  },
  {
    icon: Car,
    title: "Transport pe Platformă",
    image: imgPlatforma,
    description:
      "Transport sigur pe platforme autorizate pentru mașini noi, vintage sau utilaje de construcții.",
    features: [
      "Platforme moderne",
      "Transport național",
      "Siguranță garantată",
    ],
  },
];

const secondaryServices = [
  {
    icon: Battery,
    title: "Pornire Baterie",
    image: imgBaterie,
    desc: "Pornire profesională cu robot specializat 12/24V.",
  },
  {
    icon: Fuel,
    title: "Pană Combustibil",
    image: imgCombustibil,
    desc: "Livrare promptă de benzină sau motorină la locația ta.",
  },
];

const stats = [
  { icon: Clock, label: "Timp Răspuns", value: "20 Min" },
  { icon: Shield, label: "Asigurare", value: "Completă" },
  { icon: UserCheck, label: "Personal", value: "Calificat" },
  { icon: Zap, label: "Disponibil", value: "24/7" },
];

const Servicii = () => {
  return (
    <>
      <SEO
        title="Servicii Premium Tractări Auto București | VXX Tractări"
        description="Oferim servicii profesionale de tractări auto, asistență rutieră și transport platformă 24/7 în București."
        canonical="/servicii"
      />

      <div className="min-h-screen flex flex-col w-full bg-white overflow-x-hidden">
        <Header />

        <main className="flex-1 w-full">
          {/* Hero Header: Impact vizual imediat */}
          <section className="relative pt-20 pb-12 px-4 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="h-3 w-3 fill-current" />
                Intervenții Rapide în București și Ilfov
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
                Servicii Profesionale de{" "}
                <span className="text-primary">Tractări</span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Siguranța mașinii tale este prioritatea noastră principală.
                Oferim soluții complete de asistență rutieră cu echipamente de
                ultimă generație.
              </p>
            </div>
          </section>

          {/* Stats Bar: Încredere prin cifre */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="text-primary mb-2">
                    <s.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Services: Layout alternat cu iconiță aliniată la titlu */}
          <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto space-y-24">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Container Imagine */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Container Text */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary flex items-center justify-center rounded-2xl shadow-xl shadow-primary/20 text-white">
                        <s.icon size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                        {s.title}
                      </h2>
                    </div>

                    <p className="text-slate-500 text-lg leading-relaxed">
                      {s.description}
                    </p>

                    <ul className="space-y-3">
                      {s.features.map((f, fi) => (
                        <li
                          key={fi}
                          className="flex items-center gap-3 font-bold text-slate-700"
                        >
                          <Check
                            className="text-primary h-5 w-5 flex-shrink-0"
                            strokeWidth={3}
                          />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Secondary Services: Grid pentru intervenții minore */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                  Depanare la locație
                </h2>
                <div className="h-1.5 w-20 bg-primary mt-4"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {secondaryServices.map((ss, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden hover:bg-slate-900 transition-colors duration-500"
                  >
                    <div className="w-full md:w-1/2 overflow-hidden">
                      <img
                        src={ss.image}
                        alt={ss.title}
                        className="w-full h-full object-cover aspect-video md:aspect-square group-hover:opacity-50 transition-opacity duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                      <div className="text-primary">
                        <ss.icon size={40} />
                      </div>
                      <h3 className="text-2xl font-black uppercase text-slate-900 group-hover:text-white transition-colors tracking-tight">
                        {ss.title}
                      </h3>
                      <p className="text-slate-500 group-hover:text-slate-400 transition-colors">
                        {ss.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Servicii;
