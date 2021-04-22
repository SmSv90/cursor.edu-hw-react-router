import { React } from "react";
import welcomeImage from '../../assets/homePage/welcome.png'

export const HomePage = () => {
  return (
    <div className="wrapper__home">
      <div className="general">
        <div className="general__image">
          <img src={welcomeImage} alt="welcome"/>
        </div>
        <div className="general__text">
          <h2>Lorem ipsum text</h2>
          <p>
            Monotonectally evolve extensible markets and clicks-and-mortar metrics. Collaboratively supply principle-centered architectures after enterprise best practices. Dynamically leverage existing B2C niches rather than client-centered action items. Completely redefine just in time relationships with effective relationships. Distinctively reintermediate adaptive users via open-source supply chains.
            Professionally plagiarize leveraged outsourcing vis-a-vis global ROI. Appropriately transition long-term high-impact channels before top-line.
          </p>
        </div>
      </div>
    </div>
  )
}