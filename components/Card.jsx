import React, { useState, useEffect } from 'react';

const SensorCard = () => {
  return (
    <div className="w-1/5 max-w-full px-3 mt-6 sm:w-1/5 lg:w-1/5 sm:mt-0">
      {/* Renderização do card do sensor */}
    </div>
  );
};

const WeatherCard = ({ width }) => {
  return (
    <div className="px-3 mt-6 m-3 sm:w-3/5 lg:w-3/5 sm:mt-0 rounded-2xl" style={{ width: `${width}px`, color: '#606F7B', backgroundColor: 'rgb(165, 182, 198)', backgroundImage: "url('https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '20px' }}>
      <div className="p-4 border-b border-transparent text-center">
        <span className="text-4xl font-thin">Mountain View, US</span>
        <span className="hidden sm:inline-block align-bottom text-xs">( 94041 )</span>
      </div>
      <div className="text-center text-xl text-grey-light p-4">
        <span>Fog</span>
        <span>, fog</span>
      </div>
      <div className="flex justify-center">
        <div className="text-center p-2">
          <div className="text-lg text-grey-light">
            <span className="text-right">45˚F</span>
            <span className="text-center text-5xl text-white mx-6 font-thin">49˚F</span>
            <span className="text-left">58˚F</span>
          </div>
          <div className="text-grey-light tracking-wide">
            Saturday | 30 Dec | 10:30pm
          </div>
        </div>
      </div>
    </div>
  );
};

const ActuatorCard = ({ width }) => {
  return (
    <div className="mt-6 sm:w-600 lg:w-600 sm:mt-0" style={{ padding: '10px' , width: `${width}px`}}>
      <div className="border-black/12.5 bg-gray-800 dark:shadow-dark-xl shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-clip-border">
        <div className="flex-auto p-6">
          <div className="flex mb-4">
            <p className="mb-0 text-white">On</p>
            <div className="min-h-6 mb-0.5 ml-auto block pl-12">
              <input
                checked=""
                className="rounded-full duration-250 mt-0.5 ease-in-out after:rounded-full after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                type="checkbox"
              />
            </div>
          </div>
          <svg
            className="w-20 h-20"
            viewBox="0 0 217 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter3_f)">
              <path
                d="M67 178.583C93.5097 178.583 115 157.092 115 130.583C115 104.073 93.5097 82.5825 67 82.5825C40.4903 82.5825 19 104.073 19 130.583C19 157.092 40.4903 178.583 67 178.583Z"
                fill="white"
              ></path>
              <path
                d="M67 188.583C99.0325 188.583 125 162.615 125 130.583C125 98.55 99.0325 72.5825 67 72.5825C34.9675 72.5825 9 98.55 9 130.583C9 162.615 34.9675 188.583 67 188.583Z"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="1 66"
              ></path>
              <g filter="url(#filter3_f)">
                <path
                  d="M61.6224 120.764C78.6362 111.727 88.2605 96.5543 83.1189 86.8741C77.9773 77.1939 60.0169 76.6723 43.0031 85.7091C25.9894 94.7458 16.3651 109.919 21.5067 119.599C26.6482 129.279 44.6087 129.801 61.6224 120.764Z"
                  fill="white"
                ></path>
              </g>
            </g>
            <g filter="url(#filter2_d)">
              <path
                d="M83.768 199.054L83.768 63.0005C83.768 53.7179 87.4555 44.8155 94.0192 38.2518C100.583 31.688 109.485 28.0005 118.768 28.0005C128.051 28.0005 136.953 31.688 143.517 38.2518C150.08 44.8155 153.768 53.7179 153.768 63.0005L153.768 201.97C162.845 209.089 169.677 218.673 173.448 229.574C177.219 240.475 177.768 252.232 175.03 263.438C172.291 274.643 166.382 284.822 158.008 292.755C149.634 300.689 139.152 306.041 127.815 308.17C123.7 309.262 119.422 309.601 115.187 309.17C102.415 308.838 90.0831 304.437 79.9858 296.609C69.8886 288.781 62.5533 277.935 59.0477 265.649C55.5422 253.364 56.0495 240.28 60.4957 228.302C64.9419 216.325 73.095 206.079 83.768 199.056V199.054Z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M57.7443 249.189C57.7443 257.029 59.257 264.644 62.2406 271.821C65.1226 278.754 69.2556 285.005 74.5247 290.402C77.1201 293.061 79.9789 295.485 83.0218 297.609C86.0911 299.75 89.3762 301.605 92.7861 303.122C99.8678 306.273 107.414 307.971 115.213 308.169L115.251 308.17L115.289 308.174C116.437 308.291 117.607 308.35 118.769 308.35C121.749 308.35 124.707 307.964 127.558 307.203L127.595 307.193L127.632 307.186C134.372 305.929 140.788 303.521 146.701 300.029C152.492 296.61 157.625 292.258 161.958 287.096C166.323 281.896 169.728 276.046 172.078 269.71C174.511 263.153 175.745 256.248 175.745 249.189C175.745 244.564 175.208 239.958 174.149 235.501C173.12 231.169 171.592 226.949 169.607 222.957C167.658 219.036 165.262 215.323 162.485 211.919C159.725 208.536 156.585 205.453 153.151 202.757L152.769 202.457V201.97L152.769 63.0001C152.769 58.4096 151.87 53.957 150.097 49.766C148.385 45.7174 145.933 42.0811 142.81 38.9583C139.688 35.8355 136.051 33.3839 132.003 31.6715C127.812 29.8988 123.359 29 118.769 29C114.178 29 109.726 29.8988 105.535 31.6715C101.486 33.3839 97.8497 35.8355 94.7269 38.9583C91.6041 42.0811 89.1524 45.7174 87.44 49.766C85.6674 53.957 84.7686 58.4096 84.7686 63.0001L84.7686 199.055V199.593L84.3189 199.89C76.3153 205.164 69.6443 212.384 65.0268 220.769C62.6796 225.031 60.8688 229.575 59.6449 234.275C58.3838 239.117 57.7443 244.135 57.7443 249.189ZM56.7443 249.189C56.7443 228.231 67.4872 209.785 83.7686 199.055L83.7686 63.0001C83.7686 43.6699 99.4385 28 118.769 28C138.099 28 153.769 43.6699 153.769 63.0001L153.769 201.97C167.757 212.955 176.745 230.023 176.745 249.189C176.745 278.544 155.665 302.975 127.816 308.169C124.93 308.94 121.898 309.35 118.769 309.35C117.559 309.35 116.366 309.289 115.188 309.169C82.7694 308.344 56.7443 281.806 56.7443 249.189Z"
                fill="white"
                fillOpacity="0.5"
              ></path>
            </g>
            <path
              d="M72.6179 250.554C72.616 242.091 74.9489 233.792 79.3597 226.569C83.7705 219.347 90.0883 213.481 97.6179 209.617V85.5544H139.618V209.616C146.888 213.347 153.032 218.946 157.421 225.838C161.809 232.73 164.282 240.667 164.586 248.832C164.89 256.998 163.014 265.096 159.15 272.296C155.286 279.495 149.574 285.536 142.602 289.796C135.63 294.056 127.648 296.382 119.479 296.535C111.31 296.688 103.247 294.662 96.1202 290.666C88.9933 286.67 83.0595 280.848 78.9288 273.798C74.7982 266.748 72.6199 258.725 72.6179 250.554Z"
              fill="white"
            ></path>
            <defs>
              <filter
                id="filter30_f"
                x="2"
                y="65.5825"
                width="130"
                height="130"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                {/* Definição do filtro omitida por brevidade */}
              </filter>
              {/* Restante dos filtros omitidos por brevidade */}
            </defs>
          </svg>
          <p className="mt-2 mb-0 font-semibold text-white">Temperature</p>
          <span className="text-xs leading-tight text-white">Active</span>
        </div>
      </div>
    </div>
  );
};


const sidebarWidth = 256; // Largura da barra lateral

const Card = ({ type }) => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcula a largura disponível descontando a largura da barra lateral
  const availableWidth = windowWidth - sidebarWidth;

  // Calcula as larguras dos cartões com base na largura disponível
  const firstCardWidth = availableWidth * 0.6;
  const secondCardWidth = availableWidth * 0.3;

  if (type === 'sensor') {
    return <SensorCard width={secondCardWidth} />;
  } else if (type === 'actuator') {
    return <ActuatorCard width={secondCardWidth} />;
  } else if (type === 'weather') {
    return <WeatherCard width={firstCardWidth} />;
  } else {
    return <div className="w-1/5" />;
  }
};

export default Card;