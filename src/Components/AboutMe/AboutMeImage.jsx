

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="https://res.cloudinary.com/dx0gbdkyn/image/upload/v1753756506/WhatsApp_Image_2025-06-08_at_22.03.33_3e9d5d7d_m9z0dg.jpg"
          className="h-full w-auto object-cover"
          alt=""
        />
      </div>
      <div className="h-[500px] w-[200px] absolute bg-orange-300 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage