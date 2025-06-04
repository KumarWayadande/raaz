function LandingHeroSection() {
  return (
    <div className="sm:w-full md:w-[50%] my-20 mx-auto border-0 border-white">
      <h1 className="text-white leading-18 text-6xl font-extrabold text-center">
        <span className="font-medium">Jaldi Bol Subah</span>{" "}
        <span className="">
          <span className="underline text-amber-500">प</span>
          <span className="underline text-yellow-200">न</span>
          <span className="underline text-emerald-300">वे</span>
          <span className="underline text-fuchsia-400">ल</span>
        </span>{" "}
        <span className="text-[#FFF2EB]"> निकलना</span>
        <span className="font-medium"> Hain</span>
      </h1>
      <p className="text-gray-400 text-center">
        Write Your Confession <span className="text-yellow-200 cursor-pointer">here</span>
      </p>
    </div>
  );
}

export default LandingHeroSection;
