:root {
  --bg: #0a0a14;
  --bg2: #0f0f1e;
  --bg3: #141428;
  --card: #12122a;
  --border: rgba(100,80,200,0.18);
  --cyan: #00e5ff;
  --purple: #7c3aed;
  --purple2: #a855f7;
  --text: #e8e8f0;
  --text2: #9090b0;
  --glow: 0 0 30px rgba(0,229,255,0.15);
}

[data-theme="light"] {
  --bg: #f0f0ff;
  --bg2: #e8e8fa;
  --bg3: #dcdcf5;
  --card: #ffffff;
  --border: rgba(124,58,237,0.2);
  --cyan: #0077aa;
  --purple: #7c3aed;
  --purple2: #a855f7;
  --text: #1a1a2e;
  --text2: #555580;
  --glow: 0 4px 20px rgba(124,58,237,0.12);
}

/* Global Reset & Base Styles */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { 
  font-family: 'DM Sans', sans-serif; 
  background: var(--bg); 
  color: var(--text); 
  line-height: 1.7; 
  transition: background .3s, color .3s; 
}

/* NAVIGATION */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  backdrop-filter: blur(20px); background: rgba(10,10,20,0.8);
  border-bottom: 1px solid var(--border); padding: 0 2rem;
  display: flex; align-items: center; justify-content: space-between; height: 64px;
}
[data-theme="light"] nav { background: rgba(240,240,255,0.85); }

.nav-logo {
  font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem;
  background: linear-gradient(135deg, var(--purple2), var(--cyan));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links.open { display: flex !important; }

/* HERO SECTION */
#home { min-height: 100vh; display: flex; align-items: center; padding: 100px 2rem; position: relative; overflow: hidden; }
.hero-badge {
  display: inline-flex; align-items: center; gap: .5rem;
  background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3);
  border-radius: 20px; padding: .3rem .9rem; font-size: .8rem; color: var(--purple2);
}

/* SKILLS ANIMATION BASE */
.skill-fill {
  width: 0%; /* Initial state for JavaScript to animate */
  transition: width 1.5s cubic-bezier(.4, 0, .2, 1);
}

/* Mobile Responsiveness */
@media(max-width: 768px) {
  .nav-links {
    display: none; position: fixed; top: 64px; left: 0; right: 0;
    background: var(--bg); flex-direction: column; padding: 2rem;
  }
  .hamburger { display: flex; }
}