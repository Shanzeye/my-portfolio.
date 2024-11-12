
import Link from "next/link";
import "../styles/hero.css";


export default function Hero () {
    return (
        <div>
            <section className="hero-section">
  <div className="container">
    <img className="hero-image" alt="hero" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <div className="text-content">
      <h1 className="hero-title">"HELLO" I'M A</h1>
      <h2 className="hero-title">FRONTEND DEVELOPER</h2>
      <p className="hero-description">
      a passionate Frontend Developer with a love for creating sleek, responsive, and intuitive user interfaces. I specialize in building beautiful websites and web applications using the latest technologies and best practices in frontend development.
      </p>
      <div className="button-group">
        <Link href={"#Contact"}>
        <button className="primary-button">HIRE ME</button>
        </Link>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}


