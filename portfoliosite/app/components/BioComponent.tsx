import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaDownload,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
export default function BioComponent() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-96 items-center md:items-stretch bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex flex-col justify-between bg-red-800 w-full md:w-1/2 p-6  md:rounded-br-3xl text-white">
        <div className="mt-2 text-lg md:text-xl font-semibold">
          Welcome to my portfolio
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <span className="text-2xl md:text-3xl font-bold text-center">
            I am Shyam Zod <br /> Software Engineer
          </span>
        </div>
        <div className="flex  justify-start mt-6 md:mt-0">
          <a href="/Resume.pdf" download="/Resume.pdf">
            <button className="bg-white text-black rounded-br-2xl rounded-bl-2xl rounded-tr-2xl p-3 mb-4">
              <div className="flex flex-row space-x-2">
                <div>Download Resume</div>{" "}
                <div className="mt-1">
                  <FaDownload />
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="sm:flex sm:flex-col md:flex md:flex-row mt-6 md:mt-0 md:justify-center md:items-center ">
        <div className="ml-8">
          <div className="">
            <img
              className=" w-50 h-64 rounded-xl object-cover shadow"
              src="/ProfilPic.jpg"
              alt="Shyam Zod"
            />
          </div>
          <div className="mt-4 text-lg flex flex-row dark:text-gray-300 items-center">
            <div className="flex flex-row  items-center justify-between">
              <div>
                <a href="/" className="text-blue-500 hover:underline">
                  <FaLinkedin className="mr-5 text-3xl text-white" />
                </a>
              </div>
              <div>
                <a href="/" className="text-blue-500 hover:underline">
                  <FaTwitter className="mr-5 text-3xl text-white" />
                </a>
              </div>
              <div>
                <a href="/" className="text-blue-500 hover:underline">
                  <FaCode className="mr-5 text-3xl text-white" />
                </a>
              </div>

              <div>
                <a href="/" className="text-blue-500 hover:underline">
                  <FaGithub className="mr-5 text-3xl text-white" />
                </a>
              </div>
              <div>
                <a href="/" className="text-blue-500 hover:underline">
                  <FaInstagram className="mr-5 text-3xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:ml-20 md:ml-0 py-20 space-y-2">
          <div className="flex flex-row space-x-2 sm:ml-20 md:ml-0">
            <div className="text-xl">
              <FaLocationDot />
            </div>
            <div>Pune,Maharashtra,India.</div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="text-xl">
              <FaPhone />
            </div>
            <div>+91 8788583119</div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="text-xl">
              <FaEnvelope />
            </div>
            <div>ShyamZod03@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
