import SingleConfessionCard from "./SingleConfessionCard";

function AllConfessionsPage() {
  return (
    <div className="sm:w-full md:w-[60%] mx-auto">
      <p className="text-gray-400 my-4 hidden md:block">All Confessions</p>

      <div className="flex flex-col mx-auto items-center">
        <div className="confessions-container grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
          <SingleConfessionCard />
        </div>
      </div>
    </div>
  );
}

export default AllConfessionsPage;
