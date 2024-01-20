import Photo from "../../assets/photo.jpg";


import "./mainPage.css";


export const MainPage = () => {
  return (
    <main>
      <div className="container mainPage">
        <img src={Photo} alt="image" />
        <div className="mainPage_text">
          <h1>
          I´m Timofei Gaydarzhi. Designer & Front-End Developer based in Germany
        </h1>

        <p>
          I am a good team player, competent, and, most importantly,
          responsible. If you have a cool project or you are looking for an idea
          for it, then I`m the one you need. 
          </p>
        </div>
        
      </div>
    </main>
  );
};
