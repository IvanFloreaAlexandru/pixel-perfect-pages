import { Truck, Settings, Zap, Banknote, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Intervenție rapidă",
    description:
      "Știm că timpul este prețios. Ne deplasăm rapid la locația ta, indiferent de oră sau locație, pentru a te repune în mișcare cât mai repede.",
  },
  {
    icon: Settings,
    title: "Echipamente moderne",
    description:
      "Dispunem de o flotă diversificată și platforme autorizate, capabile să transporte autoturisme, SUV-uri și autoutilitare în maximă siguranță.",
  },
  {
    icon: Truck,
    title: "Personal calificat",
    description:
      "Echipa noastră este formată din profesioniști cu experiență, pregătiți să trateze fiecare solicitare cu maximă seriozitate și profesionalism.",
  },
  {
    icon: Banknote,
    title: "Prețuri corecte",
    description:
      "Oferim tarife transparente și corecte pentru toate serviciile noastre, fără costuri ascunse sau surprize neplăcute la finalul cursei.",
  },
];

const Features = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-secondary mb-4">De ce să ne alegi?</h2>
          <p className="text-muted-foreground text-lg">
            Siguranța mașinii tale este prioritatea noastră. Suntem mereu
            pregătiți să te ajutăm, oferind certitudini în momentele dificile
            prin servicii de încredere.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Note */}
        <div className="mt-12 text-center">
          <p className="font-semibold text-foreground mb-4">
            📞 Sună acum pentru tractare rapidă! Suntem disponibili 24/7.
          </p>
          <div className="inline-flex items-center gap-2 text-primary bg-primary/5 px-4 py-2 rounded-full text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>Tratăm fiecare solicitare cu maximă seriozitate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
