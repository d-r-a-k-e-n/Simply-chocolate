import "./madeSection.css";
import Video from "../../video/chocolate-with-history.mp4";

export default function MadeSection() {
  return (
    <section className="made-section" id="made-section">
      <div className="container">
        <h2 className="made-section__title">
          how it’s <span className="title-accent">made?</span>
        </h2>
        <div className="made-section__box">
          <video
            preload="metadata"
            controls
            muted
            src={Video}
            className="made-section__video"
            width="560"
          ></video>
          <div className="made-section__list-box">
            <h3 className="made-section__list-title">
              Try our chocolates today and discover the perfect balance of
              flavor
            </h3>
            <ul className="made-section__list">
              <li className="made-section__item">
                <p>
                  Heat the milk in a saucepan without bringing it to a boil. Add
                  sugar and cocoa powder.
                </p>
              </li>
              <li className="made-section__item">
                <p>
                  At the same time, prepare a water bath. Melt the butter on it.
                </p>
              </li>
              <li className="made-section__item">
                <p>
                  "Mix" the milk mixture and already liquid butter. Mix
                  thoroughly with a silicone spatula so that the mass becomes
                  uniform and silky.
                </p>
              </li>
              <li className="made-section__item">
                <p>Heat the mixture over low heat, letting it barely boil.</p>
              </li>
              <li className="made-section__item">
                <p>
                  Pour the chocolate into special containers (can be replaced
                  with ice molds). Allow to cool and harden.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
