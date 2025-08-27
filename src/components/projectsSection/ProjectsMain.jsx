import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

export default function ProjectsMain() {
    const projects = [
        {
            name: "Complete Login and Register Panel using Nodejs MongoDB",
            year: "Mar2022",
            align: "center",
            image: "../../images/website-img-1.jpg",
            link: "#",
        },
       
    ];
    return (
        <div id='projects'>
            <ProjectsText />
            <div className='mx-30'>
                {
                    projects.map((item,index)=>{
                        return(
                            <SingleProject key={index}  name={item.name} year={item.year} align={item.align} image={item.image}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
