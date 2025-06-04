function FooterSection() {
  return (
    <div className="footer-container">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container sm:w-full md:w-[60%] gap-y-7 pb-10 flex flex-col mx-auto items-center">
        <div className="footer-part-1 text-gray-400">
          <span className="font-semibold text-white">Raaz</span> - A Platform to
          express anything you want... <br />
        </div>
        <div className="footer-part-1 text-gray-400">
          Designed by{" "}
          <span className="font-semibold text-white">The Team Mariyaan🔥</span>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
