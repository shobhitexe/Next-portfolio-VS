import Image from "next/image";
import { useRouter } from "next/router";

type dataArrayProps = {
  title: string;
  image: string;
  link: string;
};

export enum NavigationType {
  Route = "Route",
  Link = "Link",
}

type SidebarListProps = {
  dataArray: dataArrayProps[];
  position?: string;
  isActive: string;
  setIsActive: (index: string) => void;
  linkType: NavigationType;
};

export default function SidebarList({
  dataArray,
  position = "-left-8",
  isActive,
  setIsActive,
  linkType,
}: SidebarListProps) {
  const router = useRouter();

  function handleClick(link: string) {
    linkType === NavigationType.Route
      ? router.push(link)
      : window.open(link, "_blank");
  }

  return (
    <div className="mt-1 flex flex-col gap-1">
      {dataArray.map((data) => (
        <div
          className="relative"
          key={data.title}
          onClick={() => {
            handleClick(data.link);
          }}
        >
          <div
            className="ml-5 flex cursor-pointer gap-1"
            onClick={() => {
              setIsActive(data.title);
            }}
          >
            <Image
              src={data.image}
              alt={data.title}
              width={15}
              height={15}
              className=" z-10"
            />
            <p className="z-10 select-none font-firaCode text-sm text-lightText">
              {data.title}
            </p>
          </div>

          {data.title === isActive && (
            <div
              className={`absolute ${position} -top-1 z-0 h-7 w-64 cursor-pointer bg-selectedSideBar shadow-sm`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
