import { useState } from 'react';
import './header.css';

export const Header = () => {
  const Navigation = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
      setActiveTab(tab === activeTab ? null : tab);
    };

    return (
      <nav>
        <ul>
          <li onClick={() => handleTabClick('Experience')} className={activeTab === 'Experience' ? 'active' : ''}><a href="#">Experience</a></li>
          <li onClick={() => handleTabClick('Skills')} className={activeTab === 'Skills' ? 'active' : ''}><a href="#">Skills</a></li>
          <li onClick={() => handleTabClick('Projects')} className={activeTab === 'Projects' ? 'active' : ''}><a href="#">Projects</a></li>
          <li onClick={() => handleTabClick('Contact')} className={activeTab === 'Contact' ? 'active' : ''}><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  };

  return (
    <header>
      <div className="headerName">
        Timofei.G
      </div>
      <Navigation />
    </header>
  );
};
