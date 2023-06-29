import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

type ProjectProps = {
  fetchedData: {};
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { project } = query;

  const filePath: string = path.join(
    process.cwd(),
    "portfolioData",
    `${project}.json`
  );
  try {
    const fetchedData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return {
      props: {
        fetchedData,
      },
    };
  } catch {
    return {
      props: { fetchedData: { error: "file not found" } },
    };
  }
};

export default function Project({ fetchedData }: ProjectProps) {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    setJsonData(fetchedData);
  });

  console.log(jsonData);

  return <div></div>;
}
