import {madeData} from './madeData'
import "./madeSection.css";
import Video from "../../../../public/video/chocolate-with-history.mp4";

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
          />
          <div className="made-section__list-box">
            <h3 className="made-section__list-title">
              Try our chocolates today and discover the perfect balance of
              flavor
            </h3>
            <ul className="made-section__list">
              {madeData.map(({ text }, index) => (
                <li className="made-section__item" key={index}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
