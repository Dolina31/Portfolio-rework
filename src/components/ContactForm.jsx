import { useEffect, useState } from "react";

export default function ContactForm() {
  const [raison, setRaison] = useState("");
  const [forfait, setForfait] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setRaison(params.get("raison") || "");
      setForfait(params.get("forfait") || "");
    }
  }, []);

  return (
    <form method="POST" action="/api/send-form">
      <div>
        {/* Nom et Prénom */}
        <label>
          Nom et Prénom :
          <input
            type="text"
            name="name"
            placeholder="Mariane Dumont"
            required
          />
        </label>

        {/* Adresse email */}
        <label>
          Adresse email :
          <input
            type="email"
            name="email"
            placeholder="Mariane@email.com"
            required
          />
        </label>
      </div>

      <div>
        {/* Objet de la demande */}
        <label>
          Objet de la demande :
          <select
            value={raison}
            onChange={(e) => setRaison(e.target.value)}
            name="raison"
          >
            <option value="">-</option>
            <option value="devis">Demande de devis</option>
            <option value="infos">Demande d'informations</option>
          </select>
        </label>

        {/* Choix du forfait */}
        <label>
          Choix du forfait :
          <select
            value={forfait}
            onChange={(e) => setForfait(e.target.value)}
            name="forfait"
          >
            <option value="">-</option>
            <option value="maquette">Forfait Maquette</option>
            <option value="site">Forfait Site</option>
            <option value="complet">Forfait Complet</option>
          </select>
        </label>
      </div>

      {/* Message */}
      <label>
        Votre message :
        <textarea placeholder="Votre message ici." name="message" />
      </label>

      <button type="submit">Envoyer</button>
    </form>
  );
}
