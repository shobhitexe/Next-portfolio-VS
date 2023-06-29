import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto mt-[50px] flex w-[70%] flex-col gap-10 text-center font-firaCode">
      <h1 className="text-[40px] font-semibold text-textBlue">About Me</h1>
      <div>
        <Image
          src={"/about/about.png"}
          alt="about"
          width={200}
          height={200}
          className="float-none mx-auto ss:float-left"
        />
        <p className=" text-lightText">
          My name is Shobhit Gupta, and I am a self-taught programmer who has
          become a skilled full-stack developer. I have spent a lot of time
          learning JavaScript, Node.js, React, Next.js, and Express since I have
          a strong interest for coding. My love for open source projects has led
          me to actively give back to the programming community by developing
          useful tools and materials. My specialties include leveraging React
          and Next.js to construct responsive and understandable user interfaces
          as well as Node.js and Express to build scalable server-side
          applications. I make an effort to produce high-quality work that is
          both functional and maintainable by approaching problems from a
          problem-solving perspective, paying close attention to detail, and
          committing to ongoing learning. I am a useful addition to the
          programming community because I value collaboration and good teamwork.
        </p>
      </div>
    </div>
  );
}
