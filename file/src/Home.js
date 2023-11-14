import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/61dwDY1mQ-L.jpg" />
      <Link to="soda">Soda</Link>
      <Link to="chips">Chips</Link>
      <Link to="proteinBar">ProteinBar</Link>
    </div>
  );
}
