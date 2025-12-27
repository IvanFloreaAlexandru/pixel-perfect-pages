import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Confidentialitate = () => {
  return (
    <>
      <SEO
        title="Politica de Confidențialitate | VXX Tractări Auto București"
        description="Politica de confidențialitate VXX Tractări Auto. Informații despre colectarea, utilizarea și protecția datelor personale."
        canonical="/confidentialitate"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-primary mb-8">
                Politica de confidențialitate
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-6">
                  Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    1. Introducere
                  </h2>
                  <p>
                    VXX Tractări Auto respectă confidențialitatea datelor
                    dumneavoastră personale. Această politică explică ce date
                    colectăm, cum le folosim și cum le protejăm.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    2. Date Colectate
                  </h2>
                  <p>
                    Colectăm următoarele tipuri de date: nume, număr de telefon,
                    adresa de email, adresa de preluare/livrare, informații
                    despre vehicul. Aceste date sunt necesare pentru prestarea
                    serviciilor solicitate.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    3. Utilizarea Datelor
                  </h2>
                  <p>
                    Datele sunt utilizate exclusiv pentru prestarea serviciilor
                    de tractări auto și asistență rutieră, comunicarea cu
                    clienții și îmbunătățirea serviciilor noastre. Nu vindem sau
                    transmitem datele către terți.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    4. Protecția Datelor
                  </h2>
                  <p>
                    Implementăm măsuri tehnice și organizatorice adecvate pentru
                    protejarea datelor dumneavoastră împotriva accesului
                    neautorizat, pierderii sau distrugerii.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    5. Drepturile Dumneavoastră
                  </h2>
                  <p>
                    Aveți dreptul de a accesa, rectifica sau șterge datele
                    dumneavoastră personale. Pentru exercitarea acestor
                    drepturi, contactați-ne la vxxtractari@gmail.com.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    6. Contact
                  </h2>
                  <p>
                    Pentru orice întrebări despre această politică,
                    contactați-ne la telefon 0774 579 178 sau email
                    vxxtractari@gmail.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Confidentialitate;
