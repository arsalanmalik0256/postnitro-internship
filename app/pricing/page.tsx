"use client";
import React, { useState } from "react";
import { Stack, Text, Card, Group, Button, Badge, SegmentedControl, Box, SimpleGrid, Center } from "@mantine/core";
import { CheckCircleIcon, LightningIcon } from "@phosphor-icons/react";

// ✅ Type for Plan data
type Plan = {
	name: string;
	monthly: string;
	yearly: string;
	previousYearly?: string;
	description: string;
	features: string[];
	highlight?: boolean;
};

// ✅ Paid Plans Data
const plans: Plan[] = [
	{
		name: "STARTER PLAN",
		monthly: "$10/month",
		yearly: "$8/month",
		previousYearly: "$10/month",
		description: "Perfect for getting started.",
		features: [
			"Watermark-free exports",
			"Access to basic AI models (GPT-4o, Claude Haiku)",
			"30 downloads/month",
			"8 AI Generated Slides per Carousel",
		],
	},
	{
		name: "SOLOPRENEUR PLAN",
		monthly: "$20/month",
		yearly: "$10/month",
		previousYearly: "$20/month",
		description: "Saves you $120 per year. Perfect for solo creators.",
		features: [
			"Watermark-free exports",
			"Access to advanced AI models (GPT-4, Claude Sonnet)",
			"15 AI Generated Slides per Carousel",
			"Up to 5 Brands",
			"Unlimited downloads",
			"Access to all templates",
			"Custom color palettes",
			"Create custom templates",
		],
		highlight: true, // ✅ middle card highlighted (special styling)
	},
	{
		name: "TEAM PLAN",
		monthly: "$50/month",
		yearly: "$25/month",
		previousYearly: "$50/month",
		description: "Saves you $300 per year. Perfect for small teams.",
		features: [
			"100 AI generated images per month",
			"Up to 5 workspaces",
			"Up to 20 slides per carousel",
			"15 custom templates",
		],
	},
];

// ✅ Free Plan (separately shown below)
const freePlan: Plan = {
	name: "Free Plan",
	monthly: "$0/month",
	yearly: "$0/month",
	description: "To help you get started.",
	features: ["Access to GPT-4o-Mini", "Access to basic templates", "5 download per month"],
};

export default function PricingPlans() {
	// ✅ State for billing cycle toggle (monthly / yearly)
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

	return (
		<Stack gap="xl" align="center" mx="auto" sx={{ maxWidth: 900, px: "1rem", py: "2rem" }}>

			{/* ---------- Header Section ---------- */}
			<Stack align="center" gap="sm">
				<Text size="2rem" fw={700} align="center">
					Plans for Your Carousel Creation Needs
				</Text>
				<Text size="sm" align="center">
					From solo creators to agencies, we have a plan that fits your requirements.
				</Text>
			</Stack>

			{/* ---------- Billing Toggle (Monthly / Yearly) ---------- */}
			<Stack gap="xs" align="center">
				<SegmentedControl
					value={billingCycle}
					// ✅ Changes state when user clicks monthly/yearly
					onChange={(val) => setBillingCycle(val as "monthly" | "yearly")}
					data={[
						{ label: "Monthly", value: "monthly" },
						{ label: "Yearly", value: "yearly" },
					]}
				/>

				{/* ✅ Show discount badge only when yearly is selected */}
				{billingCycle === "yearly" && (
					<Badge color="#087A68" variant="filled" size="sm" mt={5}>
						30% OFF ON YEARLY SUBSCRIPTION! - ANNUAL30OFF
					</Badge>
				)}
			</Stack>

			{/* ---------- Paid Plans Grid ---------- */}
			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
				{plans.map((plan) => (
					<Card
						key={plan.name}
						p="lg"
						style={{
							// ✅ Highlighted plan gets green border, others grey
							border: plan.highlight ? "2px solid #087A68" : "1px solid #e0e0e0",
							backgroundColor: "#fff",
							transition: "transform 0.2s, box-shadow 0.2s",
							// ✅ Slightly bigger if highlight is true
							transform: plan.highlight ? "scale(1.05)" : "scale(1)",
							zIndex: plan.highlight ? 2 : 1,
							minHeight: plan.highlight ? 520 : 460,
							// ✅ Shadow style (green for highlight, normal grey for others)
							boxShadow: plan.highlight
								? "15px 0 25px -10px rgba(0, 128, 0, 1.0)"
								: "0 2px 5px rgba(0,0,0,1.0)",
						}}
					>
						<Stack gap="xs" align="flex-start">
							{/* ✅ Plan Name */}
							<Text fw={700} size="lg" c="#087A68">
								{plan.name}
							</Text>

							{/* ✅ Show previous price with strikethrough if yearly */}
							{billingCycle === "yearly" && plan.previousYearly && (
								<Text size="xs" c="red" td="line-through">
									Previously {plan.previousYearly}
								</Text>
							)}

							{/* ✅ Price (depends on monthly/yearly) */}
							<Text fw={700} size="lg">
								{billingCycle === "monthly" ? plan.monthly : plan.yearly}
							</Text>

							{/* ✅ Small description text */}
							<Text size="sm" color="gray">
								{plan.description}
							</Text>

							{/* ✅ Features list with check icon */}
							<Stack gap={2} mt={5} align="flex-start">
								{plan.features.map((feature) => (
									<Group key={feature} gap={6} align="center">
										<CheckCircleIcon size={20} weight="thin" color="#087A68" />
										<Text size="sm">{feature}</Text>
									</Group>
								))}
							</Stack>

							{/* ✅ Get Started Button + extra note */}
							<Box mt={10} w="100%">
								<Button
									fullWidth
									leftSection={<LightningIcon size={20} color="white" weight="thin" />}
									style={{ backgroundColor: "#087A68" }}
								>
									Get Started
								</Button>
								<Text size="xs" color="gray" align="center" mt={6}>
									*All prices are subject to applicable taxes
								</Text>
							</Box>
						</Stack>
					</Card>
				))}
			</SimpleGrid>
			{/*above free plan*/}
			<Group>
				<Text size="sm" c="black" ta="center"  >
					if you require aditional limits, you can
				</Text>
				<Text fw={700} td="underline" c="teal">

					add them ass add-ons
				</Text>
				<Text size="sm" c="black" ta="center"  >
					to your subscribtion.
				</Text>
			</Group>


			{/* ---------- Free Plan Card (separate) ---------- */}
			{/* Free Plan */}
			<Card
				shadow="sm"
				p="lg"
				style={{
					width: "20%",
					border: "1px solid #ccc",
					marginTop: 20,
					marginBottom: 20,
					minHeight: 120, // short height
				}}
			>
				<Group align="center" gap="1" wrap="nowrap" >
					{/* Left Side (Plan Info) */}
					<Stack align="flex-start" gap="1">
						<Text fw={700} size="lg" c="teal.6">
							{freePlan.name}
						</Text>
						<Text fw={700} size="lg">
							{billingCycle === "monthly" ? freePlan.monthly : freePlan.yearly}
						</Text>
						<Text size="sm" color="gray" >
							{freePlan.description}
						</Text>
					</Stack>

					{/* Right Side (Features + Button) */}
					<Group gap="xl" align="center">
						{/* Features list */}
						<Stack gap={6}>
							{freePlan.features.map((feature) => (
								<Group key={feature} gap={6} align="center">
									<CheckCircleIcon size={18} color="#087A68" weight="thin" />
									<Text size="sm">{feature}</Text>
								</Group>
							))}
						</Stack>

						{/* Button */}
						<Button
							leftSection={<LightningIcon size={18} color="white" weight="thin" />}
							style={{ backgroundColor: "#087A68" }}
						>
							Get Started
						</Button>
					</Group>
				</Group>
			</Card>
		</Stack>
	);
}
