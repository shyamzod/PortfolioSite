export default function Experience() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <h3 className="text-4xl font-bold mb-10 text-center">Experience</h3>
      </div>

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl sm:justify-center sm:ml-20">
        <div className="space-y-4">
          <div className="bg-stone-950 p-8 rounded-xl relative flex md:flex-row flex-col items-start md:items-center transform transition-transform duration-300 hover:scale-105">
            <div className="absolute transform -translate-x-1/2 w-6 h-6 bg-green-800 rounded-full"></div>
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-gray-300 dark:border-gray-700 pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  Persistent Systems
                </h4>
                <span className="">Sept 2023 - Present</span>
              </div>
              <p className="">Senior Software Engineer</p>
            </div>
          </div>
          <div className="bg-stone-950 p-8 rounded-xl relative flex md:flex-row flex-col items-start md:items-center transform transition-transform duration-300 hover:scale-105">
            <div className="absolute transform -translate-x-1/2 w-6 h-6 bg-red-950 rounded-full"></div>
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-gray-300 dark:border-gray-700 pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  Persistent Systems
                </h4>
                <span>Sept 2021 - Sept 2023</span>
              </div>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className="bg-stone-950 p-8 rounded-xl relative flex md:flex-row flex-col items-start md:items-center transform transition-transform duration-300 hover:scale-105">
            <div className="absolute transform -translate-x-1/2 w-6 h-6 bg-red-950 rounded-full"></div>
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-gray-300 dark:border-gray-700 pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  Alive Tech Services
                </h4>
                <span>January 2021 - June 2021</span>
              </div>
              <p>Intern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
