export default function Projects() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <h3 className="text-4xl font-bold mb-10 text-center">Projects</h3>
      </div>

      <div className="relative bg-white dark:bg-gray-900 p-10 rounded-2xl w-full max-w-3xl">
        <div className="space-y-16">
          <div className="relative flex md:flex-row flex-col items-start md:items-center">
            <div className="absolute transform -translate-x-1/2 w-6 h-6 bg-purple-950 rounded-full"></div>
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-gray-300 dark:border-gray-700 pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold">
                  Senior Software Engineer - Persistent Systems
                </h4>
                <span className="text-gray-500 dark:text-gray-400">
                  Sept 2023 - Present
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Describe your responsibilities and achievements here.
              </p>
            </div>
          </div>
          <div className="relative flex md:flex-row flex-col items-start md:items-center">
            <div className="absolute transform -translate-x-1/2 w-6 h-6 bg-purple-950 rounded-full"></div>
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-gray-300 dark:border-gray-700 pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold">
                  Software Engineer - Persistent Systems
                </h4>
                <span className="text-gray-500 dark:text-gray-400">
                  Sept 2021 - Sept 2023
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Describe your responsibilities and achievements here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
