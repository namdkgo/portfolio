import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import resumePDF from './assets/남동관_이력서+자소서.pdf';

const MENU = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Header() {
  const [active, setActive] = useState('about');
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    if (isProjectPage) {
      setActive('projects');
      return;
    }

    const handleScroll = () => {
      if (isScrolling) return;
      const sections = MENU.map(m => document.getElementById(m.id));
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollY) {
          setActive(MENU[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling, isProjectPage]);

  const handleScrollTo = (id) => {
    if (isProjectPage) {
      navigate('/');
      if (id === 'about') {
        navigate('/');
      } else {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
            setTimeout(() => setIsScrolling(false), 700);
          }
        }, 100);

      }

    } else {
      setIsScrolling(true);
      if (id === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActive(id);
        setTimeout(() => setIsScrolling(false), 700);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActive(id);
          setTimeout(() => setIsScrolling(false), 700);
        }
      }
    }
  };

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && !isProjectPage) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActive(hash);
        }
      }, 100);
    }
  }, [location.hash, isProjectPage]);

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = '남동관_이력서+자소서.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-[6vh]">
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold text-white select-none hover:opacity-80 transition"
        >
          남동관 포트폴리오
        </button>
        <nav className="space-x-6 flex items-center">
          {MENU.map(menu => (
            <button
              key={menu.id}
              className={`font-medium transition-colors border-b-2 ${active === menu.id
                  ? 'text-[#FFFFFF] border-[#FFFFFF]'
                  : 'text-white border-transparent hover:text-[#FFFFFF] hover:border-[#FFFFFF] '
                }`}
              onClick={() => handleScrollTo(menu.id)}
            >
              {menu.label}
            </button>
          ))}
          <button
            onClick={handleDownloadPDF}
            className="ml-4 bg-white text-[#184B85] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
            title="포트폴리오 PDF 다운로드"
          >
            PDF
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
