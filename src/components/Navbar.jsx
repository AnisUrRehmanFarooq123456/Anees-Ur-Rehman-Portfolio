import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Focus", id: "focus" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const MenuIcon = ({ open }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {open ? (
      <>
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </>
    ) : (
      <>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </>
    )}
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // true while the page is smooth-scrolling after a click
  const clicking = useRef(false);
  const timer = useRef(null);

  // Highlight the section that is currently on screen
  useEffect(() => {
    const updateActive = () => {
      // while a click is scrolling, wait until scrolling stops
      if (clicking.current) {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          clicking.current = false;
        }, 150);
        return;
      }

      // at the very bottom of the page, the last section is active
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) {
        setActive(navItems[navItems.length - 1].id);
        return;
      }

      // otherwise: the last section whose top has passed the navbar
      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      });
      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      clearTimeout(timer.current);
    };
  }, []);

  // Clicking a link highlights it immediately
  const handleClick = (id) => {
    setActive(id);
    clicking.current = true;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clicking.current = false;
    }, 1200);
    setOpen(false);
  };

  return (
    <>
      <div id="top" />
      <nav className="navbar" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a href="#top" className="logo" onClick={() => setActive("")}>
            Anees<span>.dev</span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${active === item.id ? "active" : ""}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => handleClick(item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="mailto:anees2217117@gmail.com" className="hire-btn">Hire Me ↗</a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <MenuIcon open={open} />
          </button>
        </div>

        {open && (
          <div className="mobile-menu">
            <div className="mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`mobile-link ${active === item.id ? "active" : ""}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => handleClick(item.id)}
                >
                  {item.name}
                </a>
              ))}
              <a href="mailto:anees2217117@gmail.com" className="hire-btn">Hire Me ↗</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;