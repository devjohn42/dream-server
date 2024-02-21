import { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div
      id="app"
      className="bg-alice dark:bg-eerie transition-all ease-in-out duration-700"
    >
      <h1 className="font-bold text-neon">Welcome to Dream Servers</h1>
      <h2 className="font-bold text-neon">Welcome to Dream Servers</h2>
      <h3 className="font-bold text-neon">Welcome to Dream Servers</h3>
      <h4 className="font-bold text-neon">Welcome to Dream Servers</h4>
      <h5 className="font-bold text-neon">Welcome to Dream Servers</h5>
      <h6 className="font-semibold text-rich dark:text-alice transition-all ease-in-out duration-700">
        Where limitless possibilities await. Step into an interactive and
        intuitive space, where every dream becomes a reality.
      </h6>
      <button
        className="text-rich dark:text-alice border-rich dark:border-alice hover:text-neon dark:hover:text-neon border-[2px] rounded-[0.25rem] p-[0.5rem_1.5rem] font-medium outline-none transition-all ease-in-out duration-700"
        onClick={handleThemeSwitch}
      >
        {theme === 'dark' ? 'Sun' : 'Moon'}
      </button>
    </div>
  );
};

export default App;
