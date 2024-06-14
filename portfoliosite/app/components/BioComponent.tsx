export default function BioComponent() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-96 items-center md:items-stretch bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex flex-col justify-between bg-red-800 w-full md:w-1/2 p-6 rounded-xl md:rounded-br-3xl text-white">
        <div className="mt-2 text-lg md:text-xl font-semibold">
          Welcome to my portfolio
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <span className="text-2xl md:text-3xl font-bold text-center">
            I am Shyam Zod <br /> Software Engineer
          </span>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <button className="bg-white text-black rounded-br-2xl rounded-bl-2xl rounded-tr-2xl p-3 mb-4">
            Download Resume
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  mt-6 md:mt-0">
        {/* <img
          className="md:w-11/12 rounded-xl object-cover shadow"
          src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
          alt="Shyam Zod"
        /> */}
        <div className="mt-4 text-lg flex flex-row dark:text-gray-300 items-center">
          Follow On --
          <div className="flex flex-row  items-center justify-between">
            <div>
              <a href="/" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
            <div>
              <a href="/" className="text-blue-500 hover:underline">
                Twitter
              </a>
            </div>
            <div>
              <a href="/" className="text-blue-500 hover:underline">
                Github
              </a>
            </div>
            <div>
              <a href="/" className="text-blue-500 hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
