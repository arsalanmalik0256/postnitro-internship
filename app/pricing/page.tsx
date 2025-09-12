"use client";
import React, { useState } from "react";
import { Stack, Text, Card, Group, Button, Badge, SegmentedControl, Box, SimpleGrid, Center } from "@mantine/core";
import { CheckCircleIcon, LightningIcon } from "@phosphor-icons/react";
import PlanCardVertical from "../components/PlanCard/PlanCardVertical"
import FreePlanCardHorizontal from "../components/PlanCard/FreePlanCardHorizontal";


// ✅ Type for Plan data
export interface Plan {
	name: string;
	monthly: string;
	yearly: string;
	previousYearly?: string;
	description: string[];
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
		description: ["Perfect for getting started.",],
		features: [
			"Watermark-free exports",
			"Access to basic AI models ",
			"30 downloads/month",
			"8 AI Generated Slides per Carousel",
		],
	},
	{
		name: "SOLOPRENEUR PLAN",
		monthly: "$20/month",
		yearly: "$10/month",
		previousYearly: "$20/month",
		description: [
			"Saves you $120 per year.",
			"Perfect for solo creators."
		],



		features: [
			"Watermark-free exports",
			"Access to advanced AI models ",
			"15 AI Generated Slides per Carousel",
			"Up to 5 Brands",
			"Unlimited downloads",
			"Access to all templates",
			"Custom color palettes",
			"Create custom templates"
		],
		highlight: true, // ✅ middle card highlighted (special styling)
	},
	{
		name: "TEAM PLAN",
		monthly: "$50/month",
		yearly: "$25/month",
		previousYearly: "$50/month",
		description: ["Saves you $120 per year.", "Perfect for solo creators."],
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
	description: ["To help you get started.",],
	features: ["Access to GPT-4o-Mini", "Access to basic templates", "5 download per month"],
};

export default function PricingPlans() {
	// ✅ State for billing cycle toggle (monthly / yearly)
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

	return (
		// outer stack: vertical layout for entire pricing section//
		<Stack gap={10} align="center" mx="auto" style={{ padding: "2rem", backgroundImage: `url("grid-box.svg")` }}>

			{/* ---------- Header Section ---------- */}
			<Stack align="center" gap={8}>
				<Text size="xl" fw={700} ta="center" c="black" style={{ fontSize: "3rem" }}>
					Plans for Your Carousel Creation Needs
				</Text>

				<Text size="sm" ta="center" c="dimmed">
					From solo creators to agencies, we have a plan that fits your requirements.
				</Text>
			</Stack>

			{/* ---------- Billing Toggle (Monthly / Yearly) ---------- */}
			<Stack gap={8} align="center">
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
					<Badge color="#087A68" variant="filled" size="sm" mt={1} mb={20}>
						30% OFF ON YEARLY SUBSCRIPTION! - ANNUAL30OFF
					</Badge>
				)}
			</Stack>

			{/* ---------- Paid Plans Grid ---------- */}
			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
				{plans.map((plan) => (
					<PlanCardVertical
						key={plan.name}
						plan={plan}
						billingCycle={billingCycle}
					/>
				))}
			</SimpleGrid>
			{/*above free plan*/}
			<Group mt="20px" justify="center">
				<Text size="sm" c="black" ta="center">
					if you require additional limits, you can{" "}
					<Text component="span" fw={700} td="underline" c="teal">
						add them as add-ons
					</Text>{" "}
					to your subscription.
				</Text>
			</Group>



			{/* ---------- Free Plan Card (separate) ---------- */}
			{/* Free Plan */}
			{/* free plan card resuable code*/}
			<FreePlanCardHorizontal 
			freeplan={freePlan} billingCycle={billingCycle} />

		</Stack>
	);
}
