export const PopularClients = () => {
  const imgsList = [
    "../PopClient/20.webp",
    "../PopClient/21.webp",
    "../PopClient/22.webp",
    "../PopClient/9.webp",
    "../PopClient/11.webp",
    "../PopClient/roquette.png ",
  ];
  return (
    <div className="md:flex md:justify-center md:scale-100 scale-75 grid grid-cols-3 gap-6 w-full px-6 items-center md:max-w-60 mx-auto md:py-20 md:space-x-6 ">
      {imgsList.map((img, i) => (
        <img key={i} src={img} className="w-30 h-24"></img>
      ))}
    </div>
  );
};
