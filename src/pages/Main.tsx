import Image from "next/image";

export default function Main() {
  return (
    <div className="mx-auto mt-[50px] flex w-[70%] flex-col gap-10 text-center font-firaCode">
      <h1 className="text-[40px] font-semibold text-textBlue">
        Welcome To My portfolio Website
      </h1>
      <p className="text-lightText">
        Welcome to my personal programming portfolio! I'm excited to share my
        experience, skills and projects with you. Here you'll find a selection
        of my work in various programming languages and frameworks, showcasing
        my abilities as a software developer. Feel free to browse through my
        portfolio and if you have any questions or opportunities, please don't
        hesitate to contact me. Thank you for visiting!
      </p>
      <div className="flex justify-center gap-10">
        <Image src="/home/home1.png" alt={"home1"} width={200} height={200} />
        <Image src="/home/home2.png" alt={"home2"} width={200} height={200} />
      </div>
      <p className="text-commentColor">
        /* Don't forget to follow me on GitHub, Twitter, and LinkedIn to stay
        updated on my latest projects and developments. Let's connect and grow
        together in the tech community. */
      </p>
    </div>
  );
}
