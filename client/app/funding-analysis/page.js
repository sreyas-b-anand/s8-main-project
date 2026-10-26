import { DollarSign } from "lucide-react";
import FeaturePlaceholder from "@/components/feature-placeholder";

export const metadata = {
  title: "Funding Analysis",
};

export default function FundingAnalysisPage() {
  return (
    <FeaturePlaceholder
      icon={DollarSign}
      title="Funding Analysis"
      description="Provide startup parameters and get matched with relevant investor types and potential funding opportunities."
    />
  );
}
