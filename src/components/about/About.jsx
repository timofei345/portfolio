import pictureAbout from "../../assets/picture.png"
import "./about.css"

export const About = () => {
  return (
      <section id="about" className="container">
          <div className="aboutMe">
              <div className="aboutMe_text">
              <h1>Philosophy & values</h1>
              <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
              </div>  
            <button>More about me</button>
          </div>
          <div className="about_picture">
              <img src={pictureAbout} alt="picture" />
          </div>
    </section>
  )
}

