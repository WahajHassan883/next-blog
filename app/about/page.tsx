import MissionSection from '@/components/MissionSection';
import AboutHero from './../../components/AboutHero';
import JourneySection from '@/components/JourneySection';
import TeamSection from '@/components/TeamSection';

export default function About(){
    return(
      <div>
       <AboutHero />
       <MissionSection/>
       <JourneySection/>
       <TeamSection/>
      </div>
    );
}