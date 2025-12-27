import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Termeni = () => {
  return (
    <>
      <SEO
        title="Termeni și condiții | VXX Tractări Auto București"
        description="Termenii și condițiile de utilizare a serviciilor VXX Tractări Auto. Informații despre drepturile și obligațiile părților."
        canonical="/termeni"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-primary mb-8">Termeni și condiții</h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-6">
                  Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    1. Acceptarea Termenilor
                  </h2>
                  <p>
                    Prin utilizarea serviciilor VXX Tractări Auto, acceptați în
                    totalitate acești termeni și condiții. Dacă nu sunteți de
                    acord cu oricare dintre aceste prevederi, vă rugăm să nu
                    utilizați serviciile noastre.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    2. Descrierea Serviciilor
                  </h2>
                  <p>
                    VXX Tractări Auto oferă servicii de tractări auto, asistență
                    rutieră, transport vehicule și alte servicii conexe în
                    București și împrejurimi. Serviciile sunt disponibile 24/7.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    3. Prețuri și Plăți
                  </h2>
                  <p>
                    Prețurile serviciilor sunt comunicate la momentul
                    solicitării și pot varia în funcție de distanță, tipul
                    vehiculului și complexitatea intervenției. Plata se face la
                    finalizarea serviciului, în numerar sau prin transfer
                    bancar.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    4. Responsabilități
                  </h2>
                  <p>
                    VXX Tractări Auto se obligă să efectueze serviciile cu
                    profesionalism și în siguranță. Vehiculele sunt asigurate pe
                    toată durata transportului. Clientul se obligă să furnizeze
                    informații corecte despre vehicul și locație.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    5. Contact
                  </h2>
                  <p>
                    Pentru orice întrebări referitoare la acești termeni, ne
                    puteți contacta la telefon 0774 579 178 sau email
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

export default Termeni;
