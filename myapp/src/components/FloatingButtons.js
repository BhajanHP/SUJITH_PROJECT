import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/7975949978"  // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fab whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+7975949978" // replace with your number
        className="fab call"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default FloatingButtons;
