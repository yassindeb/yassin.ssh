export const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="container mx-auto px-4 mb-0 py-6">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Yassin Moussamih {year}
      </p>
    </footer>
  );
};
