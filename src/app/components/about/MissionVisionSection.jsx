import MissionVisionCard from "./MissionVisionCard";

export default function MissionVisionSection() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <MissionVisionCard
          image="/about/vision.png"
          badge="VISION"
          title="TO BE THE MOST TRUSTED"
          highlight="FITNESS DESTINATION."
          description="Our vision is to become the most trusted fitness destination where people of all fitness levels feel welcomed, challenged, and inspired to become their best selves."
        />

        <MissionVisionCard
          image="/about/mission.png"
          badge="MISSION"
          title="TO INSPIRE PEOPLE TO"
          highlight="LIVE STRONGER."
          description="Our mission is to empower every individual through expert coaching, a supportive community, and world-class fitness experiences."
        />
      </div>
    </section>
  );
}