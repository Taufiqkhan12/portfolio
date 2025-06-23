import ThemeChanger from "./ThemeChanger";

const Header = () => {
  return (
    <header
      className="mx-auto mt-24 flex max-w-xl justify-between px-4"
      aria-label="Site Header"
    >
      <h1 className="text-xl font-medium">Hey, I&apos;m Taufiq</h1>
      <ThemeChanger />
    </header>
  );
};

export default Header;
