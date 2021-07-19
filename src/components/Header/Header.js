import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>Pokedex</h2>
    </div>
  );
};

export default Header;
