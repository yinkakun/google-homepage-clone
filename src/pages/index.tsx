import Image from 'next/image';
import { useState } from 'react';
import Layout from '@/components/layout';
import menuIcon from '../assets/icons/menu-icon.svg';
import googleLogo from '../assets/images/google-logo.png';
import searchIcon from '../assets/icons/search-icon.svg';
import microphoneIcon from '../assets/icons/microphone-icon.svg';
import leafImage from '../assets/images/leaf.png';

function Home() {
  const [searchTerm, setSearchTerm] = useState(``);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <Layout title="Google">
      <header className="p-5 flex items-center justify-end text-sm">
        <ul className="flex items-center mr-4> capitalize">
          <li className="mr-4">
            <a className="hover:underline" href="https://mail.google.com">
              Gmail
            </a>
          </li>
          <li className="mr-4">
            <a className="hover:underline " href="https://www.google.com/imghp">
              Images
            </a>
          </li>
          <li className="mr-4">
            <a
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
              href="https://www.google.com.ng/intl/en/about/products"
            >
              <Image src={menuIcon} height={24} width={24} alt="" />
            </a>
          </li>
          <li className="mr-4 bg-blue-500 text-white px-6 py-2 rounded">
            <a href="https://accounts.google.com/ServiceLogin">sign in</a>
          </li>
        </ul>
      </header>

      <main className="text-xl flex flex-col items-center justify-start flex-grow px-5">
        <div className="mt-24 flex  items-center flex-col w-full">
          <div className="select-none">
            <Image
              src={googleLogo}
              alt="Google Logo"
              layout="intrinsic"
              className="w-100"
            />
          </div>

          <div className="border border-gray-300 p-2 px-4 mt-7 flex rounded-full w-full max-w-2xl hover:shadow">
            <div className="flex-grow-0  flex items-center justify-center cursor-pointer select-none">
              <Image src={searchIcon} height={24} width={24} alt="" />
            </div>

            <input
              value={searchTerm}
              onChange={handleInputChange}
              className="flex-grow focus:outline-none text-base px-4 h-9"
              type="text"
            />

            <div className="flex-grow-0 flex items-center justify-center cursor-pointer select-none">
              <Image src={microphoneIcon} height={24} width={24} alt="" />
            </div>
          </div>

          <div className="flex mt-7">
            <a
              href={`https://www.google.com/search?q=${searchTerm}`}
              className="bg-gray-100  px-6 py-2 mr-5 rounded text-base hover:shadow-sm border border-transparent hover:border-gray-300"
              type="button"
            >
              Search
            </a>
            <a
              href="https://google.com"
              className="bg-gray-100  px-6 py-2 rounded text-base hover:shadow-sm border border-transparent hover:border-gray-300"
              type="button"
            >
              I&apos;m Feeling Lucky
            </a>
          </div>

          <div className="text-sm mt-8">
            Google offered in:{`  `}
            <a
              className="hover:underline text-blue-800 mr-2"
              href="https://g.com"
            >
              Hausa
            </a>
            {`  `}
            <a
              className="hover:underline text-blue-800 mr-2"
              href="https://g.com"
            >
              Igbo
            </a>
            {`  `}
            <a
              className="hover:underline text-blue-800 mr-2"
              href="https://g.com"
            >
              Èdè Yorùbá
            </a>
            {`  `}
            <a
              className="hover:underline text-blue-800 mr-2"
              href="https://g.com"
            >
              Nigerian Pidgin
            </a>
          </div>
        </div>
      </main>

      <footer className="flex flex-col  bg-gray-100 opacity-70">
        <div className="p-5">Nigeria</div>
        <div className="p-5 flex flex-col md:flex-row justify-center md:justify-between w-full border-t border-gray-300">
          <ul className="flex flex-grow justify-center md:justify-start mt-4 md:mt-0 order-2 md:order-1">
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                About
              </a>
            </li>
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                Advertising
              </a>
            </li>
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                Business
              </a>
            </li>
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                How Search Works
              </a>
            </li>
          </ul>

          <a
            className="justify-center items-center flex-grow hover:underline text-center md:text-left  order-1 md:order-2"
            href="https://www.google.com"
          >
            <span className="mr-2">
              <Image src={leafImage} height={16} width={16} alt="" />
            </span>
            <span>Carbon neutral since 2007</span>
          </a>

          <ul className="flex flex-grow justify-center md:justify-end mt-4 md:mt-0 order-3">
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                Privacy
              </a>
            </li>
            <li className="mr-6">
              <a className="hover:underline" href="https://www.google.com">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.google.com">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
