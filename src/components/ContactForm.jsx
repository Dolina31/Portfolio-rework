import { useEffect, useState } from "react";

export default function ContactForm() {
  const [objet, setObjet] = useState("");
  const [status, setStatus] = useState("");
  const [forfait, setForfait] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setObjet(params.get("objet") || "");
      setForfait(params.get("forfait") || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mblabrgj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("Message envoyé !");
        setShowModal(true); // on ouvre la mini-modale
        e.target.reset();
        setObjet(""); // reset select
        setForfait(""); // reset select

        // on ferme automatiquement la modale après 3s
        setTimeout(() => setShowModal(false), 5000);
      } else {
        setStatus("Erreur lors de l'envoi");
      }
    } catch (err) {
      setStatus("Erreur lors de l'envoi");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form_inputs_wrapper">
          <label>
            Nom et Prénom
            <input
              type="text"
              name="Nom"
              placeholder="Mariane Dumont"
              required
            />
          </label>
          <label>
            Adresse email
            <input
              type="email"
              name="Email"
              placeholder="Mariane@email.com"
              required
            />
          </label>
        </div>

        <div className="form_inputs_wrapper">
          <label>
            Choix du forfait
            <select
              value={forfait}
              onChange={(e) => setForfait(e.target.value)}
              name="Forfait"
            >
              <option value="">-</option>
              <option value="Maquette">Forfait Maquette</option>
              <option value="Site">Forfait Site</option>
              <option value="Complet">Forfait Complet</option>
            </select>
          </label>

          <label>
            Objet de la demande
            <select
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              name="Objet"
            >
              <option value="">-</option>
              <option value="Devis">Demande de devis</option>
              <option value="Informations">Demande d'informations</option>
            </select>
          </label>
        </div>

        <label className="form_message">
          Message
          <textarea placeholder="Votre message ici." name="Message" required />
        </label>

        <button type="submit">Envoyer</button>
      </form>

      {/* Mini-modale de confirmation */}
      {status && (
        <div
          className={`confirmation_modal ${
            status === "Message envoyé !" ? "success" : "error"
          }`}
        >
          <p>{status}</p>
        </div>
      )}
    </>
  );
}
