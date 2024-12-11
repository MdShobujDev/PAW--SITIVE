import Link from "next/link";

function TermsAndConditions() {
  return (
    <section className=" max-w-5xl mx-auto py-8 bg-primary px-5">
      <h1 className=" text-3xl font-bold text-center">
        Allgemeine Geschäftsbedingungen (AGB) für Paw-Sitive
      </h1>
      <div className=" py-3 text-center">
        <h2 className=" font-bold text-xl">für Paw-Sitive</h2>
        <p className=" font-medium">
          Willkommen bei Paw-Sitive! Unsere Allgemeinen Geschäftsbedingungen
          (AGB) sind darauf ausgelegt, Ihnen einen klaren Überblick über unsere
          Dienstleistungen und Ihre Rechte zu geben.
        </p>
      </div>

      <div className=" bg-secondary p-3 rounded-lg flex flex-col gap-5">
        <div>
          <h2 className=" font-bold text-xl">§ 1 Geltungsbereich</h2>
          <p className=" text-sm font-medium">
            <span>{`Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die über die Webseite "Paw-Sitive" `}</span>
            <span>
              <Link
                href="http://www.paw-sitive.de/"
                className=" text-blue-600 underline"
              >
                (www.paw-sitive.de)
              </Link>
            </span>
            <span>{` angeboten werden. Mit der Inanspruchnahme unserer Dienstleistungen erkennt der Kunde diese AGB an. Änderungen dieser AGB werden dem Kunden rechtzeitig mitgeteilt.`}</span>
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 2 Vertragspartner</h2>
          <p>Der Vertrag kommt zustande mit:</p>
          <p className=" font-medium">Paw-Sitive</p>
          <p>Dominique Divljak Ditzinger Straße 39</p>
          <p>Gerlingen, Baden-Württemberg, 70839 </p>
          <p className=" text-blue-600 ">📧 info@paw-sitive.de</p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 3 Dienstleistungen</h2>
          <h3 className=" font-medium">
            Paw-Sitive bietet folgende Dienstleistungen an:
          </h3>
          <ul className=" text-sm list-inside list-disc ml-2">
            <li>Generierung von Spendengeldern für Tierschutzprojekte</li>
            <li>Beratung und Optimierung von Tierkrankenversicherungen</li>
          </ul>
          <p>
            Die genauen Leistungen werden auf der Webseite detailliert
            beschrieben und können je nach Bedarf des Kunden variieren.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 4 Vertragsschluss</h2>
          <p>
            Durch die Anfrage von Dienstleistungen gibt der Kunde ein
            verbindliches Angebot ab. Der Vertrag kommt zustande, wenn wir die
            Anfrage des Kunden durch eine Bestätigung per E-Mail annehmen. Diese
            Bestätigung erfolgt innerhalb von 3 Werktagen nach Eingang der
            Anfrage.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">
            § 5 Preise und Zahlungsbedingungen
          </h2>
          <p>
            Die Preise für unsere Dienstleistungen werden individuell vereinbart
            und sind in der Auftragsbestätigung angegeben. Alle Preise verstehen
            sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt
            gemäß den in der Bestätigung festgelegten Bedingungen.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 6 Widerrufsrecht</h2>
          <p>
            Kunden haben das Recht, binnen 14 Tagen ohne Angabe von Gründen den
            Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem
            Tag, an dem der Kunde die Bestätigung der Dienstleistung erhält. Um
            das Widerrufsrecht auszuüben, muss der Kunde uns mittels einer
            eindeutigen Erklärung (z. B. per Brief, Fax oder E-Mail)
            informieren. Das Widerrufsrecht besteht nicht bei Verträgen über
            Dienstleistungen, die bereits vollständig erbracht wurden, wenn die
            Ausführung mit vorheriger ausdrücklicher Zustimmung des Verbrauchers
            begonnen hat.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 7 Gewährleistung </h2>

          <p>
            Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln haben
            die Kunden das Recht auf Nacherfüllung. Schlägt die Nacherfüllung
            fehl, kann der Kunde den Preis mindern oder vom Vertrag
            zurücktreten.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 8 Haftung </h2>
          <p>
            Paw-Sitive haftet nicht für Schäden, die durch unsachgemäße Nutzung
            der angebotenen Dienstleistungen entstehen. Für leichte
            Fahrlässigkeit haften wir nur bei Verletzung wesentlicher
            Vertragspflichten. Die Haftung für grobe Fahrlässigkeit und Vorsatz
            bleibt unberührt.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 9 Datenschutz</h2>
          <p>
            Die personenbezogenen Daten des Kunden werden gemäß den geltenden
            Datenschutzbestimmungen, insbesondere der
            Datenschutz-Grundverordnung (DSGVO), verarbeitet. Weitere
            Informationen sind in unserer Datenschutzerklärung zu finden, die
            auf der Webseite einsehbar ist.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-xl">§ 10 Schlussbestimmungen</h2>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
            Gültigkeit der übrigen Bestimmungen unberührt. Auf den Vertrag
            findet das Recht der Bundesrepublik Deutschland Anwendung, unter
            Ausschluss des UN-Kaufrechts.
          </p>
        </div>
        <div>
          <h2 className=" font-bold">📅 Stand: 09.12.2024</h2>
        </div>
      </div>

      <div className=" mt-5 text-center">
        <h2 className=" text-xl font-bold ">
          Wir danken Ihnen für Ihr Vertrauen in Paw-Sitive!
        </h2>
        <p>
          Falls Sie Fragen haben, kontaktieren Sie uns jederzeit unter
          <span className=" text-blue-600"> info@paw-sitive.de.</span>
        </p>
      </div>
    </section>
  );
}

export default TermsAndConditions;
