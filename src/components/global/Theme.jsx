import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    setIsLoading(false);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={isLoading ? 'hidden' : 'block'}>
      <button
        className="fixed bottom-5 right-5 bg-jet dark:bg-alice hover:text-neon dark:hover:text-neon md:hover:scale-[1.1] rounded-[100%] p-[0.75rem] font-medium outline-none"
        onClick={handleThemeSwitch}
      >
        {theme === 'dark' ? (
          <FaSun className="text-jet text-[1.5rem]" />
        ) : (
          <FaMoon className="text-alice text-[1.5rem]" />
        )}
      </button>
    </div>
  );
};

export default Theme;
