import React from 'react';
import GaugeComponent from 'react-gauge-component'

const SensorCard = ({ value, name }) => {
  const formatValue = (value) => {
    return Math.floor(value * 10) / 10 + ' °C';
  };

  return (
    <div className="flex flex-col">
      <div className="flex-auto p-4 rounded-2xl border-black/12.5 bg-gray-800 dark:shadow-dark-xl shadow-xl relative flex min-w-0 flex-col break-words border-0 border-solid bg-clip-border">
      <h2 className="text-center text-2xl mb-4">{name}</h2>
        <div className="flex-auto p-6">
          <GaugeComponent
            arc={{
              subArcs: [
                {
                  limit: 100,
                  color: '#5BE12C',
                  showTick: true
                },
              ],              
            }}

            labels={{
              valueLabel: {
                fontSize: 40,
                formatTextValue: formatValue
              },
            }}

            value={value}
            maxValue={140}
            tickLabels={{
              hide: true // Esconder o rótulo do tick
            }}
            pointer={{elastic: true}}
          />
        </div>
      </div>
    </div>


  );
};

const WeatherCard = ({ width }) => {
  return (
    <div className="flex flex-col md:col-span-2">
      <div className="flex-auto p-4 rounded-2xl" style={{color: '#606F7B', backgroundColor: 'rgb(165, 182, 198)', backgroundImage: "url('https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '20px' }}>
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
    </div>
  );
};

const ActuatorCard = ({ value, onClick, name}) => {
  return (
    <div className="flex flex-col">
      <div className="flex-auto p-4 rounded-2xl border-black/12.5 bg-gray-800 dark:shadow-dark-xl shadow-xl relative flex min-w-0 flex-col break-words border-0 border-solid bg-clip-border">
        <div className="flex-auto p-6">
          <div className="flex mb-4">
          <h2 className="text-center text-2xl mb-4">{name}</h2>
            <div className="min-h-6 mb-0.5 ml-auto block pl-12">
            
            
            <label className="relative inline-flex cursor-pointer items-center">
              <input 
                id="switch" 
                type="checkbox" 
                className="peer sr-only" 
                onChange={(e) => {
                  onClick(e.target.checked);
                }}
                checked={value}
              />
              <label htmlFor="switch" className="hidden"></label>
              <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
            </label>


            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 100"
            width="150"
            height="100"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <rect x="10" y="10" width="130" height="80" />
            <line x1="30" y1="20" x2="30" y2="90" />
            <line x1="120" y1="20" x2="120" y2="90" />
            <circle cx="75" cy="60" r="3" />
          </svg>


        </div>
      </div>
    </div>
  );
};

const Card = ({ type, value, onClick, name}) => {
  if (type === 'sensor') {
    return <SensorCard value={value} name={name}/>;
  } else if (type === 'actuator') {
    return <ActuatorCard onClick={onClick} value={value} name={name}/>;
  } else if (type === 'weather') {
    return <WeatherCard />;
  } else {
    return <div className="w-1/5" />;
  }
};

export default Card;