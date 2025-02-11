import React from 'react'

const About = () => {
  return (
    <div className="  h-[50vh] flex flex-col justify-center">
      <div id="abouttitle" className="  flex">
        {/* <h1>About Me</h1> */}
        <div id="left" className=" w-[50%] flex items-center justify-center">
          <div className="w-55 h-55 rounded-full bg-slate-50 overflow-hidden">
            <img
              src="https://scontent.fjlr2-2.fna.fbcdn.net/v/t39.30808-6/305267293_3222484131327305_3381505032760291054_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4SA4I0NELvQQ7kNvgH_GOJq&_nc_oc=Adh678b9Df7Gp_mGCkETTek5IdCbbeZI49UVMON86628bq06Swy98l-GWlsqISOCNGS0LfGqovwh3VWSzkM1J6Ih&_nc_zt=23&_nc_ht=scontent.fjlr2-2.fna&_nc_gid=ANxjtjQrpV42BSHv7kDldd4&oh=00_AYBN1CAdbo5j350Szs-HMlgHJimBV-xGBij_AIYPNSWoAg&oe=67ADEF05"
              alt=""
            />
          </div>
        </div>
        <div
          id="abousection
        "
          className=" w-[70%]"
        >
          <div id="aboutright" className="flex gap-5 flex-col">
            <p>
              i am an experienced Frontedend Developer wih over a decade of
              professional expertisse in the field. Throughout my career, i have
              had the privilege of collaborating wih prestigious
              organizations,contributing to their sucess and growth
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication i
              bring to each project
            </p>
          </div>
          <div id="aboutleft" className=" mt-4 flex flex-col gap-5">
            <div>HTML AND CSS </div>
            <div>REACT JS</div>
            <div> JAVA SPRING BOOT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About