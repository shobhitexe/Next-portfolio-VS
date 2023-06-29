import Image from "next/image";

const footerRightImages = [
  "UTF",
  "lf",
  "typescript",
  "workspace",
  "notification",
];

export default function Footer() {
  return (
    <div className=" fixed bottom-0 z-30 flex w-full justify-between bg-footerBg px-3 py-[2px] text-white">
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <Image
            src={"/footer/source-control.svg"}
            alt="git"
            width={17}
            height={17}
            className="object-contain text-white"
          />
          <p className="text-[13px]">main*</p>
        </div>
        <div className="flex gap-1">
          <Image src={"/footer/sync.svg"} alt="sync" width={60} height={60} />
          <Image src={"/footer/warn.svg"} alt="sync" width={60} height={60} />
        </div>
      </div>
      <div className="hidden gap-2 ss:flex ">
        {footerRightImages.map((img) => (
          <Image
            key={img}
            src={`/footer/${img}.svg`}
            alt="sync"
            width={img === "typescript" ? 60 : img === "UTF" ? 45 : 25}
            height={img === "typescript" ? 60 : img === "UTF" ? 45 : 25}
          />
        ))}
      </div>
    </div>
  );
}
