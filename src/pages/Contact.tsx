import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    subtitle: "Urgențe 24/7",
    value: "0774 579 178",
    href: "tel:0774579178",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Informații și oferte",
    value: "vxxtractari@gmail.com",
    href: "mailto:vxxtractari@gmail.com",
  },
  {
    icon: MapPin,
    title: "Locație",
    subtitle: "Sediul nostru",
    value: "București, Sector 1",
    href: null,
  },
  {
    icon: Clock,
    title: "Program",
    subtitle: "Disponibilitate",
    value: "Luni - Dum: 24/7",
    href: null,
  },
];

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact | VXX Tractări Auto București - Sună Acum 0774 579 178"
        description="Contactează-ne pentru tractări auto și asistență rutieră în București. Disponibili 24/7. Telefon: 0774 579 178, Email: vxxtractari@gmail.com"
        canonical="/contact"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-background py-16 md:py-24">
            <div className="container-custom text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Asistență Rutieră Non-Stop
                </span>
                <div className="w-8 h-0.5 bg-primary"></div>
              </div>

              <h1 className="heading-primary mb-6">
                Suntem aici să te ajutăm, 24/7
              </h1>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Indiferent unde te afli în București sau împrejurimi, echipa
                noastră este gata să intervină. Sună-ne direct pentru asistență
                imediată sau vizitează-ne la sediu.
              </p>

              <div className="flex justify-center">
                <Button variant="hero" size="xl" asChild className="shadow-lg">
                  <a href="tel:0774579178">
                    <Phone className="h-5 w-5 mr-2" />
                    Sună Acum: 0774 579 178
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="bg-secondary py-16 border-y border-border">
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {info.subtitle}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary font-bold text-lg hover:underline transition-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-bold text-lg">
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section - Full Width Style */}
          <section className="bg-background py-16 md:py-24">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="heading-secondary mb-4">
                  Acoperim toate sectoarele din București
                </h2>
                <p className="text-muted-foreground">
                  Intervenim rapid în Ilfov cat și pe autostada A0, A1, A2, A3 !
                </p>
              </div>
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-secondary rounded-3xl overflow-hidden h-[500px] shadow-2xl border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182226.43853198897!2d25.93881473133866!3d44.43774005953046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93ab6251ec7%3A0x904a625e197ed20c!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locația VXX Tractări Auto București"
                  ></iframe>
                </div>
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

export default Contact;
