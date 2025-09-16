import "../styles/global.css";
import "../styles/components/_layout.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="white-box">{children}</div>
    </>
  );
}
