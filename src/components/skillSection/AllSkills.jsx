import React from 'react'
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export default function AllSkills() {
    const skills = [
        {
            skill: "HTML",
            icon: FaHtml5,
        },
        {
            skill: "CSS",
            icon: FaCss3Alt,
        },
        {
            skill: "JavaScript",
            icon: IoLogoJavascript,
        },
        {
            skill: "ReactJS",
            icon: FaReact,
        },
        {
            skill: "NodeJS",
            icon: FaNodeJs,
        },
        {
            skill: "MongoDB",
            icon: DiMongodb,
        },
        {
            skill: "BOOTSTRAP",
            icon: FaBootstrap,
        },
        {
            skill: "TailwindCSS",
            icon: RiTailwindCssFill,
        },
    ];
    return (
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            {
                skills.map((item, index) => {
                    return (
                        <SingleSkill
                            key={index}
                            text={item.skill}
                            imgSvg={<item.icon />}
                        />
                    )
                })
            }
        </div>
    )
}
