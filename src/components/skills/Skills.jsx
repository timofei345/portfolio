import { SkillCard } from "../skill/SkillCard";
import "./skills.css";
import { SKILLS } from "../../constants/skills";
import { Carousel } from "../slider/Carousel ";







export const Skills = () => {

  

  return (
    <section className="container">
      <div className="skillset">
        <div className="skillset_info">
          <h1>Skillset</h1>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="skillset_category">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={index}
              img={skill.img}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>

      <div className="slider">
      
      <Carousel/>

      </div>
    </section>
    );
  };

