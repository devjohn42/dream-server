import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/">
      <h2 className="text-alice font-semibold">
        <span className="text-neon text-[24px] sm:text-[36px] font-bold">
          D
        </span>
        ream{''}
        <span className="text-neon text-[24px] sm:text-[36px] font-bold">
          S
        </span>
        ervers
      </h2>
    </NavLink>
  );
};

export default Logo;
