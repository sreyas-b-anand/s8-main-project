import { BotMessageSquare, TrendingUp, DollarSign, FlaskConical, Home } from "lucide-react";

// Home is separate so it can be used for title resolution too
export const HOME_ITEM = {
  key: "home",
  label: "Home",
  href: "/",
  icon: Home,
};

export const NAV_ITEMS = [
  {
    key: "rag",
    label: "RAG Assistant",
    href: "/rag",
    icon: BotMessageSquare,
    description: "Ask questions and get AI-powered answers from startup data.",
    disabled: false,
  },
  {
    key: "funding",
    label: "Funding Analysis",
    href: "/funding-analysis",
    icon: DollarSign,
    description: "Identify relevant investor types and funding opportunities.",
    disabled: false,
  },
  {
    key: "prediction",
    label: "Success Prediction",
    href: "/success-prediction",
    icon: TrendingUp,
    description: "Evaluate startup parameters and predict success likelihood.",
    disabled: false,
  },
  {
    key: "market",
    label: "Market Study",
    href: "/market-study",
    icon: FlaskConical,
    description: "Deep market research and competitive landscape analysis.",
    disabled: true,
  },
];

// All nav entries in one place for title resolution
export const ALL_NAV_ITEMS = [HOME_ITEM, ...NAV_ITEMS];
