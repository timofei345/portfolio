import LinkedIn from "../../assets/LinkedIn.svg"

    
export const Footer = () => {
  return (
      <footer>
          <div className="socialMedia">
              <p>Timofei.G</p>
              <div className="icons">
                  <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>
              </div>

          </div>

          <div className="footerInfo">
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Projects</a></li>
              </ul>
              
          </div>
          Not Copyright 2024 • Timofei Gaydarzhi. 
          <div className="createdBy">
              
          </div>
          
    </footer>
  )
}
