import { useEffect, useState } from 'react';

const MENU = [
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

function Header() {
  const [active, setActive] = useState('about');
  const [isScrolling, setIsScrolling] = useState(false);

  // 현재 섹션 감지
  useEffect(() => {
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
  }, [isScrolling]);

  // 스크롤 스냅 동작 시 메뉴 클릭
  const handleScrollTo = (id) => {
    setIsScrolling(true);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
      setTimeout(() => setIsScrolling(false), 700); // 스크롤 애니메이션 시간
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 h-[6vh]">
        <div className="text-xl font-bold text-gray-800 select-none">남동관 포트폴리오</div>
        <nav className="space-x-6 flex">
          {MENU.map(menu => (
            <button
              key={menu.id}
              className={`font-medium transition-colors border-b-2 ${
                active === menu.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-700 border-transparent hover:text-blue-600'
              }`}
              onClick={() => handleScrollTo(menu.id)}
            >
              {menu.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
