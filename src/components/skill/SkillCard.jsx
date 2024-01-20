import "./skillCard.css"

// eslint-disable-next-line react/prop-types
export const SkillCard = ({ img, title, description }) => {
  return (
      <article className="skillCard">
          <img src={img} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
    </article>
  )
}
