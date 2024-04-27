import eucalyptus from "./eucalyptus1.png";

export const Main = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="items-center py-52 lg:py-80 lg:w-2/3">
        <h1 className="text-8xl">Hi, I'm Rachel</h1>
        <h2 className="text-5xl">
          I'm a frontend leaning full stack developer
        </h2>
      </div>
      <div className="hidden lg:flex w-1/3 max-h-96 items-center justify-center">
        <img src={eucalyptus} alt="" className="object-contain rachel-medium" />
      </div>
    </div>
  );
};
