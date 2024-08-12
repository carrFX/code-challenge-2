import Culture from "@/components/(about)/Culture"
import History from "@/components/(about)/History"
import TeamAbout from "@/components/(about)/TeamAbout"
import VisionMission from "@/components/(about)/VisionMission"

const About = () => {
  return (
    <div className="bg-black text-[#cbcbcb]">
        <History/>
        <Culture/>
        <TeamAbout/>
        <VisionMission/>
    </div>
  )
}

export default About