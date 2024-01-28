import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Trafik Parkları"}
          image={"/project/img1.png"}
          about={
            "Çocuklarınızla ve ailenizle birlikte huzurlu bir ortamda eğlenceli vakit geçirebileceğiniz parklarımız sizleri bekliyor."
          }
          
          
        />
        <ProjectCard
          name={"MEGA"}
          image={"/project/img2.png"}
          about={
            "Meram Gelişim Akademisi: İçerisinde espor, ders çalışma, yazılım ve çocuklara yönelik eğitimler olan yeni nesil gelişim merkezimiz."
          }
          
        />
        <ProjectCard
          name={"Bizim Meram Köyü"}
          image={"/project/img3.png"}
          about={
            "Meramda Farklı bir konseptte konut hamlesi devam ediyor… Şehir trafiğinin gürültüsü ve kalabalığından uzaklaşmak, stres ve yorgunluğunu atmak için doğa ile iç içe olan dağ evleri projemizi sizlerle buluşturuyoruz. Proje alanımız, Konya Antalya yolu 30. Kilometrede, Sefaköy sapağında bulunmaktadır."
          }
          
        />
        <ProjectCard
          name={"Meram Yaka Sosyal Tesisi"}
          image={"/project/img4.png"}
          about={
            "Ortak Alanlar, Emekliler Konağı, Spor Tesisi, Kapalı Otopark Alanı, Ticari Alan, Gençlik Merkezi. Sosyal belediyecilik için her şey."
            
          }
         
        />
        <ProjectCard
          name={"Alabalık Restaurant"}
          image={"/project/img5.png"}
          about={
            "Muhteşem manzarasıyla Alabalık lezzetlerimizi uygun fiyata tat. Ailenle birlikte temiz havanın tadını çıkart."
          }
          
        />
        <ProjectCard
          name={"Rabia Spor Merkezi"}
          image={"/project/img6.png"}
          about={
            "Kolay ulaşıma sahip, yeni nesil spor merkezi. Yüzme salonu ve fitness salonuyla zenginleştirilen merkezimizde sağlıkla spor yapabilirsiniz."
          }
         
        />
      </div>
    </div>
  );
}

export default Project;
