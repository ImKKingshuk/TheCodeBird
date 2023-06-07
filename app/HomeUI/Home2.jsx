function Home2() {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl">Achievements</h1>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid  gap-8 grid-cols-3">
          <div className="text-center md:border-r-2 border-gray-400">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">15+</h6>
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
              Github Repos
            </p>
          </div>
          <div className="text-center md:border-r-2 border-gray-400  ">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">350+</h6>
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
              Members
            </p>
          </div>
          <div className="text-center ">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">10+</h6>
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
              Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
