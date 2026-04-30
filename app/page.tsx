'use client';
import { useState, useRef } from 'react';

export default function Home() {
  const [i, setI] = useState(0);
  const [yes, setYes] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    setI(i + 1)
    playSound(audio[i]);
  };
  const handleYesButton = () => {
    setYes(true);
    playSound("/canufeel.MP3");
  };
  const playSound = (src: string) => {
   if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }

    const novoAudio = new Audio(src);
    novoAudio.volume = 0.8;
    audioRef.current = novoAudio;

    novoAudio.play().catch(e => console.error("Erro ao tocar:", e));
};

  const titulo = ["OY MATE!", "Como é amg?", "Me odeia s ou n", "coé kk", "👁️👄👁️", "?"]
  const images = ["/hatsune.png", "/tonymcmirela.png", "/lobis.jpg", "/paulie.jpg", "/failhann.jpg", "/saul.jpg"];
  const texto = ["Ana, você aceita namorar comigo?", "", "estou sentindo um vázio INDESCRITÍVEL", "aperta 'sim' pfv", "", ""]
  const audio = ["/boom.MP3", "/goddaman.MP3", "/french.MP3", "/travis.MP3", "/amongos.MP3"]

  return (
    <div className="relative flex h-full items-center justify-center flex-col overflow-hidden">
      {!yes ? (
        <>
          {i <= 5 &&
          <>
          <div className="text-6xl mb-4">{titulo[i]}</div>
           <div className="text-4xl text-center px-4">
              {texto[i]}
          </div>
          </>
          }
          <>
           {i <= 5 &&  
           <div className='mt-4 mb-4'>
              <img 
                key={i} 
                src={images[i] || images[images.length - 1]} 
                alt="clima" 
                width={320} 
                height={540} 
                className="animate-soft-fade"
              />
           </div>}
          </>

          <div className='flex flex-row gap-16 items-center'>
            <button 
              key={i}
              style={{ 
              padding: `${32 + (i * 20)}px`, 
              fontSize: `${30 + (i * 10)}px` 
            }}
              className='border rounded-2xl bg-lime-700 hover:bg-emerald-800 cursor-pointer transition-all'
              onClick={handleYesButton}
            >
              Sim
            </button>
            {i < 5 && (
              <button
                style={{ 
                  padding: `${32 - (i * 6)}px`, 
                fontSize: `${30 - (i * 5)}px` 
              }}
                className='border rounded-2xl bg-red-800 hover:bg-red-950 cursor-pointer transition-all'
                onClick={handleClick}
              >
                Não
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="fixed inset-0 w-full h-full bg-black/20 animate-soft-fade">
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
            <h1 className="text-8xl font-bold text-blue-700 drop-shadow-2xl">EBAAAAAAAAAAAAAAA! 💖</h1>
          </div>
          <img src="/wagner.jpg" className="absolute top-5 left-5 w-64 rotate-3" />
          <img src="/happysopranos.jpg" className="absolute bottom-10 right-1/6 w-72 -rotate-6" />
          <img src="/dexter.jpg" className="absolute top-1/7 right-5 w-56 rotate-12" />
          <img src="/hann.jpg" className="absolute bottom-1/4 left-10 w-60 -rotate-12" />
          <img src="/jesse.jpg" className="absolute top-10 right-1/6 w-64 rotate-2" />
          <img src="/bobsoprano.jpg" className="absolute bottom-5 left-10 w-64 -rotate-3" />
          <img src="/hann1.jpg" className="absolute top-40 right-1/2 w-64 -rotate-12" />
          <img src="/ww.gif" className="absolute top-10 left-1/4 w-64 -rotate-3" />
          <img src="/frieren6.gif" className="absolute top-40 left-1/8 w-64 rotate-12" />
          <img src="/frieren.jpg" className="absolute top-30 right-1/3 w-64 rotate-12" />
          <img src="/frieren2.jpg" className="absolute bottom-70 left-1/5 w-64 -rotate-12" />
          <img src="/frieren3.jpg" className="absolute bottom-10 left-1/3 w-64 -rotate-3" />
          <img src="/frieren4.gif" className="absolute bottom-80 right-1/2 w-64 -rotate-3" />
          <img src="/frieren5.jpg" className="absolute bottom-70 right-1/3 w-64 rotate-3" />
          <img src="/cat.jpg" className="absolute bottom-10 right-1/3 w-64 rotate-12" />
          <img src="/jiggly.jpeg" className="absolute bottom-90 right-1/5 w-64 -rotate-45" />
          <img src="/mike.jpg" className="absolute bottom-10 right-8 w-64 rotate-3" />
          <img src="/mclovin.jpg" className="absolute bottom-14 left-1/6 w-64 rotate-12" />
          <img src="/aaa.gif" className="absolute  bottom-1 w-full" />
        </div>
      )}
    </div>
  );
}