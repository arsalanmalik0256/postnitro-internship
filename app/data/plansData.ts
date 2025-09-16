import { Plan } from "../pricing/page"; // or move Plan interface here and export it

export const plans: Plan[] = [
  {
    name: "STARTER PLAN",
    monthly: "$10/month",
    yearly: "$8/month",
    previousYearly: "$10/month",
    description: ["Perfect for getting started."],
    features: [
      "Watermark-free exports",
      "Access to basic AI models",
      "30 downloads/month",
      "8 AI Generated Slides per Carousel",
    ],
  },
  {
    name: "SOLOPRENEUR PLAN",
    monthly: "$20/month",
    yearly: "$10/month",
    previousYearly: "$20/month",
    description: ["Saves you $120 per year.", "Perfect for solo creators."],
    features: [
      "Watermark-free exports",
      "Access to advanced AI models",
      "15 AI Generated Slides per Carousel",
      "Up to 5 Brands",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    highlight: true,
  },
  {
    name: "TEAM PLAN",
    monthly: "$50/month",
    yearly: "$25/month",
    previousYearly: "$50/month",
    description: ["Saves you $120 per year.", "Perfect for teams."],
    features: [
      "100 AI generated images per month",
      "Up to 5 workspaces",
      "Up to 20 slides per carousel",
      "15 custom templates",
    ],
  },
];
