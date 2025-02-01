
import { ReactNode } from "react";

type SkillProps = {
    name:string;
    projectCount:number;
    yearsExperience:number;
    children: ReactNode
}

const Skill = ({
    name,
    projectCount,
    yearsExperience,
    children
}: SkillProps) => {


    const redSquares = <div className=" bg-gradient-to-b from-red-300 to-red-600 w-2 h-6 rounded-sm "></div>;
    const greenSquares = <div className="bg-gradient-to-b from-green-300 bg-green-900 w-2 h-6 rounded-sm"></div>;

    const yearsArray = Array(yearsExperience).fill(redSquares);
    const projectsArray = Array(projectCount).fill(greenSquares);


  return (
    <div className="flex flex-col p-2  font-poppins ">
        <span className="font-thin text-sm text-center">{yearsExperience} years, {projectCount} projects</span>
        <div className="flex gap-1 mb-2 justify-center p-1 rounded">
            {
                yearsArray.map((year, i) => <div key={i}>{year}</div>)
            }
            
            {
                projectsArray.map((project, i) => <div key={i + 30}>{project}</div>)
            }
        </div>

        <h4 className="text-2xl font-semibold text-gray-300 text-center md:text-center mb-4">{name}</h4>  

        <p className="text-lg">{children}</p>
        
    </div>
  )
}

export default Skill;