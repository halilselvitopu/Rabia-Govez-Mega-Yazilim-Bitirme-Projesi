import React from "react";
import Tilt from "react-parallax-tilt";

function Interduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          UFAK  <p className="text-[#ad50eb]">BİR</p> TANITIM
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              Bu Göreve Meram İçin geldim. 
            </p>

            <p>
              Sen ben yok,{" "}
              <span className="text-[#ad50eb]">Meram var.</span>
            </p>

            <p>
              Amacım hep birlikte Meram'ı{" "}
              <span className="text-[#ad50eb]">Geliştirmek</span> ve{" "}
              <span className="text-[#ad50eb]">Ülkenin En Güzel İlçesi Yapmak.</span> 
            </p>

            <p>
              Önümüzdeki dönemlerde{" "}
              <span className="text-[#ad50eb]">Hızla</span>{" "}
              ve <span className="text-[#ad50eb]">Büyük Bir İstekle </span>
              Meram İçin
              <span className="text-[#ad50eb]"> Birlikte Çalışacağız.</span>
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
