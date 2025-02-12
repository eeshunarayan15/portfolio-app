import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="https://scontent.fjlr2-1.fna.fbcdn.net/v/t39.30808-6/476740432_1679061873012711_8890829616459106448_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=v4OQAwux8s8Q7kNvgEB2HN6&_nc_oc=Adjb2nmz5R3yaHlVBuvlh-ndjcPsnUa7VSj_xJYydGoYbOtux8JTT9xjQwSir35LmhJjikJOJzQdpFtv_3SLfUex&_nc_zt=23&_nc_ht=scontent.fjlr2-1.fna&_nc_gid=ABV7UgR9wosuyUcYpFh-yio&oh=00_AYA3_ryc6KRKpmDgchCNk1b9SZpTLA651-GiKu8mUejOBw&oe=67B2CDC7"
          className="h-full w-auto object-cover"
          alt=""
        />
      </div>
      <div className="h-[500px] w-[200px] absolute bg-orange-300 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage