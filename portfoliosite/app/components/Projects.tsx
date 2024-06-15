export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3 className="text-4xl font-bold mt-10 text-center">Projects</h3>
      </div>

      <div className="relative mt-10 bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl">
        <div className="space-y-10">
          <div className="bg-blue-900 p-6 rounded-xl relative flex md:flex-row flex-col items-start md:items-center transform transition-transform duration-300 hover:scale-105">
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-white dark:border-white pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  DeXChange - Decentralized Crypto Exchange Platform
                </h4>
              </div>
              <p className="text-white text-xs">
                Tech Stack - Node, Express, React, Postgres, Typescript, Aws,
                Docker, Tailwindcss.
              </p>
              <ul className="mt-5 list-disc text-white text-xs pl-5">
                <li>
                  This application is designed to allow users to add usdt/inr
                  from bank into the user wallet and buy crypto by exchanging
                  with usdt or inr from wallet.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-900 rounded-xl p-6 relative flex md:flex-row flex-col items-start md:items-center transform transition-transform duration-300 hover:scale-105">
            <div className="flex-1 md:ml-10 md:pl-6 md:border-l md:border-white-300 dark:border-white pt-4 md:pt-0">
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  Reliance General Insurance
                </h4>
              </div>
              <p className="text-white text-xs">
                Tech Stack - .Net Core, Asp.Net MVC, Web Api, SQL, C#, Razor
                pages, JavaScript, jQuery, HTML, CSS.
              </p>
              <ul className="mt-5 list-disc text-white text-xs pl-5">
                <li>
                  Implemented cutting-edge features and managed Change Requests,
                  leading technical enhancement tasks for Reliance General
                  Insurance’s web application, resolved critical bugs, enhancing
                  platform stability and reducing downtime by 40%.
                </li>
                <li>
                  Performed front-end optimizations, achieving a notable 20%
                  boost in page load speed and a 15% reduction in server
                  response time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
