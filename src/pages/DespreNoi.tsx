import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { Shield, Award, Users, Clock, Target, Heart } from "lucide-react";
import heroImage from "@/assets/hero-tow-truck.jpg";
import driverImage from "@/assets/driver-portrait.jpg";

const values = [
  {
    icon: Shield,
    title: "Siguranță",
    description: "Siguranța ta și a vehiculului tău este prioritatea noastră numărul unu.",
  },
  {
    icon: Award,
    title: "Profesionalism",
    description: "Echipa noastră este formată din profesioniști cu experiență vastă.",
  },
  {
    icon: Clock,
    title: "Punctualitate",
    description: "Înțelegem urgența situației și intervenim cât mai rapid posibil.",
  },
  {
    icon: Target,
    title: "Eficiență",
    description: "Soluționăm fiecare situație cu maximă eficiență și profesionalism.",
  },
  {
    icon: Users,
    title: "Dedicare",
    description: "Suntem dedicați să oferim servicii de cea mai înaltă calitate.",
  },
  {
    icon: Heart,
    title: "Integritate",
    description: "Operăm cu transparență și onestitate în toate interacțiunile.",
  },
];

const DespreNoi = () => {
  return (
    <>
      <SEO
        title="Despre Noi | VXX Tractări Auto București - 10+ Ani Experiență"
        description="Aflați povestea VXX Tractări Auto. Cu peste 10 ani de experiență în tractări auto și asistență rutieră în București. Echipă profesionistă, echipamente moderne."
        canonical="/despre-noi"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-background section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="animate-slide-up">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                      Despre Noi
                    </span>
                  </div>

                  <h1 className="heading-primary mb-6">
                    Povestea VXX Tractări Auto
                  </h1>

                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Cu o experiență de peste 10 ani în domeniul tractărilor auto
                      și asistenței rutiere, VXX Tractări s-a impus ca unul dintre
                      liderii de piață în București și împrejurimi.
                    </p>
                    <p>
                      Am început această călătorie cu o singură platformă și un vis:
                      să oferim servicii de tractare de cea mai înaltă calitate, cu
                      respect pentru clienți și dedicare față de meseria noastră.
                    </p>
                    <p>
                      Astăzi, dispunem de o flotă modernă de autospeciale și o
                      echipă de profesioniști pregătiți să intervină 24/7 pentru a
                      te ajuta în orice situație rutieră.
                    </p>
                  </div>
                </div>

                <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={heroImage}
                      alt="Platformă VXX Tractări în acțiune"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-secondary section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={driverImage}
                      alt="Șofer profesionist VXX Tractări"
                      className="w-full h-auto object-cover aspect-[3/4]"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2 animate-slide-up">
                  <h2 className="heading-secondary mb-6">Misiunea Noastră</h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Misiunea noastră este simplă: să fim acolo când ai nevoie de
                      noi. Indiferent de oră, loc sau condiții meteo, echipa VXX
                      Tractări este pregătită să intervină rapid și eficient.
                    </p>
                    <p>
                      Ne angajăm să oferim servicii de tractare și asistență
                      rutieră la cele mai înalte standarde, tratând fiecare client
                      cu respect și profesionalism.
                    </p>
                    <p>
                      Investim continuu în tehnologie și în formarea echipei noastre
                      pentru a ne asigura că suntem mereu pregătiți să facem față
                      oricărei provocări.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-background section-padding">
            <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2 className="heading-secondary mb-4">Valorile Noastre</h2>
                <p className="text-muted-foreground text-lg">
                  Aceste valori ne ghidează în fiecare zi și definesc modul în
                  care interacționăm cu clienții noștri.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
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

export default DespreNoi;
