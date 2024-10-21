import GiftcardPageContainer from "@/components/containers/GiftcardPageContainer";
import ContactPageContainer from "@/components/containers/ContactPageContainer";
import HomePageContainer from "@/components/containers/HomePageContainer";
import TreatmentsPageContainer from "@/components/containers/TreatmentsPageContainer";

export default function Home() {
  return (
    <>
      <HomePageContainer />
      <TreatmentsPageContainer />
      <GiftcardPageContainer />
      <ContactPageContainer />
    </>
  );
}
