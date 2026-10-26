import { TrendingUp } from "lucide-react";
import FeaturePlaceholder from "@/components/feature-placeholder";

export const metadata = {
  title: "Success Prediction",
};

export default function SuccessPredictionPage() {
  return (
    <FeaturePlaceholder
      icon={TrendingUp}
      title="Success Prediction"
      description="Input key startup metrics and receive a predicted success percentage based on trained AI models."
    />
  );
}
