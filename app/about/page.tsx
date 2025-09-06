import MissionSection from '@/components/MissionSection';
import AboutHero from './../../components/AboutHero';
import JourneySection from '@/components/JourneySection';
import TeamSection from '@/components/TeamSection';

export default function About(){
    return(
      <div className="min-h-screen bg-background">
       <AboutHero />
       <MissionSection/>
       <JourneySection/>
       <TeamSection/>
      </div>
    );
}