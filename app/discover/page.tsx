
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import TopicIntelligenceMap from "../../components/topic-map/TopicIntelligenceMap";

export default function DiscoverPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <TopicIntelligenceMap />
      </main>

      <SiteFooter />
    </>
  );
}
