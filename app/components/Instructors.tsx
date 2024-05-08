"use client";

import { WavyBackground } from "@/app/components/ui/wavy-background";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { link } from "fs";
import Link from "next/link";
function Instructors() {

    const social = [
        {
          id: 1,
          link: "https://www.linkedin.com/in/lokanath-panda-642193238/",
          name: "Linkedin",
          designation: "Lokanath Panda",
          image:
            "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          name: "Instagram",
          designation: "lokanathpanda7",
          link: "https://www.instagram.com/lokanathpanda7/",
          image:
            "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          name: "Twitter",
          designation: "Lokanat48464605",
          link: "https://twitter.com/Lokanat48464605",
          image:
            "https://images.unsplash.com/photo-1690233662564-f599cc764cca?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          name: "Github",
          designation: "iamlokanath",
          link: "https://github.com/iamlokanath",
          image:
            "https://images.unsplash.com/photo-1665392996886-0949d131a5da?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 5,
          name: "Facebook",
          designation: "Lokanath Panda",
          link: "https://www.facebook.com/profile.php?id=100071480734923",
          image:
            "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 6,
          name: "Whatsapp",
          designation: "Lokanath",
          link: "https://api.whatsapp.com/send/?phone=9090272275&text=Hello+Lokanath,+I+want+to+connect+with+you&type=phone_number&app_absent=0",
          image:
            "https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

      ];


  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>

        <WavyBackground className=" w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Thank You</h2>
        <p className='text-base ms:text-lg text-white text-center mb-4'>Connect me in these social media platform</p>
        

        <div className='flex flex-row items-center justify-center mb-10 w-full;'>
        <AnimatedTooltip items={social} />
        </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors
