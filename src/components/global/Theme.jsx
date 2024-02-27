import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
  const [theme, setTheme] = React.useState('');

  React.useEffect(() => {
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
    <button
      className="fixed bottom-5 right-5 bg-jet dark:bg-alice hover:text-neon dark:hover:text-neon md:hover:scale-[1.1] rounded-[100%] p-[0.75rem] font-medium outline-none transition-all ease-in-out duration-500"
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? (
        <FaSun className="text-jet text-[1.5rem] transition-all ease-in-out duration-700" />
      ) : (
        <FaMoon className="text-alice text-[1.5rem] transition-all ease-in-out duration-700" />
      )}
    </button>
  );
};

export default Theme;
