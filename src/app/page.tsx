import CardImage_1 from "@/../public/images/card-img-1.png";
import CardImage_2 from "@/../public/images/card-img-2.jpg";
import CardImage_3 from "@/../public/images/card-img-3.png";
import image_1 from "@/../public/images/image-1.jpg";
import image_2 from "@/../public/images/image-2.jpg";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { PiPawPrintThin } from "react-icons/pi";

export default function Home() {
  return (
    <div className=" max-w-5xl mx-auto">
      <section className=" grid grid-cols-2 bg-secondary">
        <div>
          <Image className=" w-full h-full" src={image_1} alt="img" />
        </div>
        <div className=" px-10 py-8 flex flex-col items-center">
          <h2 className="text-xs">P A W- S I T I V E</h2>
          <p className=" text-xs">
            D I E I N N O V A T I O N I M T I E R S C H U T Z
          </p>
          <p className=" text-sm my-6 italic">
            Gemeinsam für das Wohl der Tiere
          </p>
          <h2 className="text-2xl mb-7 font-thin text-amber-700 text-center">
            GEWINNEN SIE EIN JAHR KOSTENLOSES FUTTER FÜR IHREN LIEBLING!
          </h2>
          <h3 className=" text-center text-amber-600 font-light ">
            REGISTRIEREN SIE SICH UND SICHERN SICH DIE CHANCE AUF EINE
            RUNDUMSORGLOS-VERSORGUNG.
          </h3>
          <p className=" text-center text-xs mt-1 text-amber-600">
            GLEICHZEITIG BIETEN WIR IHNEN EXKLUSIVE MÖGLICHKEITEN, DIE OPTIMALE
            ABSICHERUNG FÜR IHR HAUSTIER ZU FINDEN-EINFACH -KOSTENFREI UND
            UNVERBINDLICH.
          </p>

          <Link
            href="/contact-us"
            className=" text-xs mt-5 border-[1.5px] border-amber-700  cursor-pointer px-4 py-2 hover:border-amber-500 hover:shadow hover:shadow-amber-600 transition-all ease-linear rounded-md"
          >
            J E T Z T U N V E R B I N D L I C H <br />R E G I S T R I E R E N
          </Link>
        </div>
      </section>
      <section className=" bg-primary py-20 px-10">
        <h1 className=" text-center text-3xl">WER SIND WIR</h1>
        <p className="text-center py-8">
          Paw-sitive ist mehr als nur eine Vertriebsagentur - wir sind eine
          Bewegung für den Tierschutz. Unser Ziel ist es, eine Brücke zwischen
          Menschen und Unternehmen zu schaffen, die sich für das Wohl von Tieren
          einsetzen möchten. Mit emotionaler Verbundenheit und fundierter
          Fachkompetenz sowohl im Versicherungswesen als auch im Bereich des
          Tierschutzrechts, bieten wir Ihnen die Möglichkeit, aktiv zum
          Tierschutz beizutragen - ohne direkten Spendenaufruf, sondern durch
          eine clevere Optimierung Ihrer bestehenden Versicherungen.
        </p>
        <div className=" flex flex-col items-center gap-1 mt-4">
          <div className=" text-7xl text-secondary">
            <PiPawPrintThin />
          </div>
          <h2 className="text-secondary text-sm">PAW-SITIVE</h2>
        </div>
      </section>
      <section className=" grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-7 w-full bg-white px-5 py-10">
        <Card
          title="Unsere Dienstleistungen – Ihre Vorteile"
          description={`Versicherungsoptimierung ür Ihr Haustier, absolut kostenrei und unverbindlich. Wir analysieren Ihre bestehenden Versicherungen und zeigen Ihnen, wie Sie dabei sparen und gleichzeitig Gutes tun können. Transparente Prozesse Die Dierenz aus der Optimierung ließt bei schritlicher Bestätigung und nach Umstellung des Vertrags automatisch und vollständig in den Tierschutz – Sie müssen sich um nichts weiter kümmern. Patenschaten bernehmen Sie eine Patenschat und unterstützen Sie ein Tier, das dringend Hile benötigt.`}
          image={CardImage_1}
        />
        <Card
          title="Wie können Sie helen? W"
          description={`Unsere Mission ist es, den Tierschutz zu stärken, und Sie können dabei eine zentrale Rolle spielen. Indem wir beispielsweise Ihre Tierkrankenversicherung überprüen und optimieren, wird eine potenzielle Ersparnis erzielt. Die Dierenz zwischen dem alten und dem neuen Beitrag (die Ersparnis von 12 Monatsbeiträgen) ließt direkt als Versorgungspaket in den Tierschutz. Sie unterstützen damit nicht nur Ihr eigenes Tier, sondern helen gleichzeitig auch unzähligen Tieren in Not – einach und nachhaltig. Zusätzlich bieten wir Ihnen die Möglichkeit, Patenschaten ür Tiere zu übernehmen oder einmalige Geldspenden zu leisten. So können Sie aktiv die Lebensbedingungen von Tieren verbessern.`}
          image={CardImage_2}
        />
        <Card
          title="arum Ihr Beitrag einen Unterschied macht?"
          description={`Tiere können nicht ür sich selbst sprechen, doch gemeinsam können wir ihnen eine Stimme geben.Mit jeder optimierten Versicherung, jeder inanziellen Unterstützung und jeder Patenschat schaen wir positive Veränderungen. Ihr Engagement bei Paw-sitive ist nicht nur eine Entscheidung ür das eigene Tierwohl, sondern ein direkter Beitrag zum Schutz und zur Rettung von Tieren in Not.`}
          image={CardImage_3}
        />
      </section>
      <section className="grid grid-cols-2 items-center bg-primary">
        <div>
          <Image src={image_2} alt="image_2" />
        </div>
        <div className=" px-14">
          <h2 className=" text-center text-4xl font-light">PAW-SITIVE</h2>
          <div className=" font-light text-center mt-7">
            <p>
              steht für nachhaltigen Tierschutz und verantwortungsvolle Hilfe.
              Gemeinsam mit Ihnen schaffen wir eine Welt, in der Tiere
              geschützt, gepflegt und geliebt werden. Dank unseres innovativen
              Modells aus
            </p>
            <p>
              Versicherungsoptimierung und gezielt geschnürten
              Tierversorgungspaketen, die alle Kosten für Pflege, Futter und
              Tierarztbesuche umfassen, können wir konkrete Beiträge leisten,
              die einen Unterschied machen für jedes Tier, das unsere Hilfe
              braucht.
            </p>
            <p>Kontaktieren Sie uns noch heute</p>
            <p>
              Werden Sie Teil unserer Mission. Lassen Sie uns gemeinsam die
              Zukunt ür Tiere verändern!
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-white px-10 py-12">
        <div className=" flex flex-col items-center">
          <div className=" text-6xl text-primary">
            <PiPawPrintThin />
          </div>
          <h2 className="text-center font-light text-3xl">KUNDEN FEEDBACK</h2>
        </div>
        <div className=" my-10 grid grid-cols-3 gap-5">
          <div>
            <p className=" text-sm text-center font-medium italic">
              “Die Kontaktaufnahme war sehr <br />
              unkompliziert und aufschlussreich.”
            </p>

            <h3 className=" text-center text-amber-500">N.KOSAK</h3>
          </div>
          <div>
            <p className=" text-sm text-center font-medium italic">
              “Sehr freundliche Mitarbeiter. Tolles <br /> Konzept. <br />
              Schnelle Abwicklung. Keine versteckten <br /> Kosten.”
            </p>

            <h3 className=" text-center text-amber-500">C.MITTELSTAET</h3>
          </div>
          <div>
            <p className=" text-sm text-center font-medium italic">
              “Bitte mehr solcher Projekte, erfahrene und <br />
              herzliche Mitarbeiter.”
            </p>

            <h3 className=" text-center text-amber-500">J.ZEPF</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
