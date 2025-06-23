import IntroText from "@/_components/IntroText";
import ProfileTabs from "@/_components/ProfileTabs";
import SocialLinks from "@/_components/SocialLinks";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <IntroText />
      <SocialLinks />
      <ProfileTabs />
    </div>
  );
}
