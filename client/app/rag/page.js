import { BotMessageSquare } from "lucide-react";
import FeaturePlaceholder from "@/components/feature-placeholder";

export const metadata = {
  title: "RAG Assistant",
};

export default function RAGPage() {
  return (
    <FeaturePlaceholder
      icon={BotMessageSquare}
      title="RAG Assistant"
      description="Ask questions and receive AI-generated answers using retrieval-augmented generation over curated startup data."
    />
  );
}
