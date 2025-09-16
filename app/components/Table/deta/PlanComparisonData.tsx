// app/data/planComparisonData.ts

export const planNames = ["Free", "Starter Plan", "Creator Plan", "Teams Plan"];

export const comparisonRows: {
  type: "section" | "data";
  label: string;
  values?: string[];
}[] = [
    { type: "section", label: "OVERVIEW" },
    { type: "data", label: "Plan Name", values: ["Free", "Starter", "Creator", "Team"] },
    { type: "data", label: "Price", values: ["$0", "$10/month", "$20/month", "$50/month"] },
    { type: "data", label: "Type", values: ["Free", "Recurring", "Recurring", "Recurring"] },

    { type: "section", label: "PLAN LIMITS" },
    { type: "data", label: "Workspace", values: ["1", "1", "1", "5"] },
    { type: "data", label: "Downloads", values: ["5/month", "30/month", "Unlimited", "Unlimited"] },
    { type: "data", label: "Team Members (Users)", values: ["1", "1", "1", "5"] },
    { type: "data", label: "Custom Templates", values: ["0", "1", "5", "15"] },
    { type: "data", label: "Branding", values: ["1", "2", "5", "15"] },
    { type: "data", label: "Custom Color Presets", values: ["0", "2", "5", "15"] },
    { type: "data", label: "AI Configuration Presets", values: ["0", "2", "5", "15"] },
    { type: "data", label: "AI Generated Slides per Carousel", values: ["5", "8", "15", "20"] },
    { type: "data", label: "AI Generated Images", values: ["0", "5", "50/month", "10/month"] },

    { type: "section", label: "FEATURES" },
    { type: "data", label: "Watermark", values: ["✅", "✅", "❌", "✅"] },
    { type: "data", label: "GPT 4o Mini", values: ["✅", "✅", "✅", "✅"] },
    { type: "data", label: "GPT 4o", values: ["❌", "❌", "✅", "✅"] },
    { type: "data", label: "GPT 4", values: ["❌", "❌", "✅", "✅"] },
    { type: "data", label: "Claude Haiku", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "Claude Sonnet", values: ["❌", "❌", "✅", "✅"] },
    { type: "data", label: "Claude Opus", values: ["❌", "❌", "✅", "✅"] },
    { type: "data", label: "Custom Template", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "Upload Custom Fonts", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "Custom Font Sizing", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "Custom Watermarks", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "CTA QR Code", values: ["❌", "✅", "✅", "✅"] },
    { type: "data", label: "Integrations", values: ["❌", "✅", "✅", "✅"] },
  ];
