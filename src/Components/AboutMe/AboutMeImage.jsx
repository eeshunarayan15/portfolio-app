import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="https://scontent.fjlr2-2.fna.fbcdn.net/v/t39.30808-6/444762560_3647586558817058_1221705984558617768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_uy3fT-rIicQ7kNvgG-Ad5J&_nc_oc=Adim5z5tX7pABci36puI6ISNgmHEA46SQB-a3768T87_keFaq6ccfeDeOdc5Lm96d6vlJOHglBbIzKoPKmZ1LaJh&_nc_zt=23&_nc_ht=scontent.fjlr2-2.fna&_nc_gid=ABQrfurtXhkXA-EWwl1I0c8&oh=00_AYAo0WuC-C_LJhOlUS1naGxmqaABd3DenBw4yO1hGyGNXg&oe=67B09B8A"
          className="h-full w-auto object-cover"
          alt=""
        />
      </div>
      <div className="h-[500px] w-[200px] absolute bg-orange-300 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage