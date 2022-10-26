import { Link } from "react-router-dom";
import "../styles/style.css"
import "/src/images/googleImage.png";
export function Home() {
  return (
    <>
    <section>
      <h2 className="title">ABOUT GNC - AUBURN MALL</h2>
      <p>Whether your goal is to stay fit, lose weight, build mass or supplement your daily wellness, our knowledgeable Coaches are happy to point the way. Come on in! Let's live long, live well and make it a community endeavor!</p>
      <h6 className="Slogan">Come visit us at our 550 Center St store in Auburn, ME today!</h6>
      <div className="image">
      <a href="https://www.google.com/maps/place/GNC/@44.1221582,-70.2283739,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x604a2dcad55969de!8m2!3d44.1221582!4d-70.2283739">
        <img style={{}} src="/src/images/googleImage.png" alt="" /></a>
      </div>
    </section>
    <h5></h5>
    </>
    
  );
}
