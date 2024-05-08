"use client";
import React from 'react'
import { TracingBeam } from "@/app/components/ui/tracing-beam";
function TracingBeamDemo() {

  const dummyContent = [
    {
      role: "Full Stack Developer",
      description: (
        <>
          <p>
            As the Team Lead of the Operations department, I oversee a multifaceted array of teams including Testing, DevOps, Defect Fixing, Database Management, and Digital Marketing. My role involves managing and coordinating the efforts of these diverse teams to ensure seamless operation and optimal performance.
            <br />
            <br />
            In addition to my managerial responsibilities, I am actively involved in AWS cloud as a Data Science and Analysis Engineer. This dual role allows me to leverage my expertise in cloud computing and data analysis to drive innovation and efficiency within our operations.
          </p>

        </>
      ),
      company: "Intelligent Cloud Applications",
      type: "Part-time",
      year: "Feb 2024 - Present · 4 mos",

    },
    {
      role: "Data Science And Analysis Engineer",
      description: (
        <>
          <p>
            Part-time Data Science and analysis engineer at Intelligent,
            utilizing skills in Google Analytics, Data Analytics, Python,
            Microsoft Excel, and AWS. Analyzing complex data sets to
            generate valuable insights.
            I took on the responsibility of managing the database as a
            Database administrator.
          </p>

        </>
      ),
      company: "Intelligent Cloud Applications",
      type: "Part-time",
      year: "Nov 2022 - Jan 2024 · 1 yr, 7 mos",
    },
    {
      role: "Full Stack Developer Intern",
      description: (
        <>
          <p>
            Gained hands-on experience in
            UI/UX, React.js, Node.js web development, Serverless
            Framework, JavaScript, Figma, SST, GitHub, Bootstrap, Amazon
            Web Services, and CSS.
            Collaborated with a team of developers to design and develop
            web applications using React.js, ensuring optimal user
            experience and functionality.

          </p>
        </>
      ),
      company: "Bworkz",
      type: "Part-time",
      year: "July 2022 - Oct 2022 · 4 mos",

    },

  ];


  return (
    <>
      <div className=' p-12 bg-gray-900'>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Experirnece</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Professional Journey Thus Far</p>
        </div>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-5">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className=" text-blue-500 rounded-full text-sm w-fit mb-1">
                  {item.company}
                </h2>

                <p className="text-xl text-purple-500">
                  {item.role}
                </p>
                <p className="mb-4 text-orange-500">
                  {item.type}, {item.year}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert text-gray-400">

                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </>
  )
}

export default TracingBeamDemo
