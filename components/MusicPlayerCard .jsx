// components/MusicPlayerCard.js

const MusicPlayerCard = () => {
  return (
    <div className="relative flex flex-col items-start min-w-0 mt-6 break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 after:opacity-85 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:h-full after:w-full after:z-1 after:block after:rounded-2xl">
      <div className="cursor-pointer">
        <div className="bg-center bg-cover mb-7 w-full h-full absolute rounded-2xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-music.jpg')]"></div>
        <div className="relative flex-auto p-6 text-white z-2">
          <h5 className="mb-0 text-white">Some Kind Of Blues</h5>
          <p className="text-sm leading-normal text-white">Deftones</p>
          <div className="flex pt-2 mt-6">
            <button className="inline-block p-2 mb-0 text-xs font-bold tracking-tight text-center text-white uppercase align-middle transition-all ease-in border border-solid rounded-full shadow-none leading-pro hover:bg-transparent hover:opacity-75 hover:shadow-none hover:border-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none active:hover:border-white active:bg-white active:border-white active:text-black active:opacity-85 active:shadow-xs hover:-translate-y-px border-white/75 bg-white/10" type="button">
              <i className="p-2 fas fa-backward" aria-hidden="true"></i>
            </button>
            <button className="inline-block p-2 mx-2 mb-0 text-xs font-bold tracking-tight text-center text-white uppercase align-middle transition-all ease-in border border-solid rounded-full shadow-none leading-pro hover:bg-transparent hover:opacity-75 hover:shadow-none hover:border-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none active:hover:border-white active:bg-white active:border-white active:text-black active:opacity-85 active:shadow-xs hover:-translate-y-px border-white/75 bg-white/10" type="button">
              <i className="p-2 fas fa-play" aria-hidden="true"></i>
            </button>
            <button className="inline-block p-2 mb-0 text-xs font-bold tracking-tight text-center text-white uppercase align-middle transition-all ease-in border border-solid rounded-full shadow-none leading-pro hover:bg-transparent hover:opacity-75 hover:shadow-none hover:border-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none active:hover:border-white active:bg-white active:border-white active:text-black active:opacity-85 active:shadow-xs hover:-translate-y-px border-white/75 bg-white/10" type="button">
              <i className="p-2 fas fa-forward" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerCard;
