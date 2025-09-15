"use client";
import React, { useState } from "react";
import { Stack, Text, Card, Group, Button, Badge, SegmentedControl, Box, SimpleGrid, Center, Table, Menu, ActionIcon, Divider } from "@mantine/core";

import PlanCardVertical from "../components/PlanCard/PlanCardVertical"
import FreePlanCardHorizontal from "../components/PlanCard/FreePlanCardHorizontal";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";


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
const planNames = ["Free", "Starter Plan", "Creator Plan", "Teams Plan"];
const comparisonRows: {
	type: "section" | "data";
	label: string;
	values?: string[];
}[] = [
		{ type: "section", label: "OVERVIEW" },
		{ type: "data", label: "Plan Name", values: ["Free", "Starter", "Creater", "Team"] },
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
		{ type: "data", label: "Downloads", values: ["5/month", "30/month", "unlimited", "unlimited"] },
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
		{ type: "data", label: "ustom Font Sizing", values: ["❌", "✅", "✅", "✅"] },
		{ type: "data", label: "Custom Watermarks", values: ["❌", "✅", "✅", "✅"] },
		{ type: "data", label: "CTA QR Code", values: ["❌", "✅", "✅", "✅"] },
		{ type: "data", label: "Integrationse", values: ["❌", "✅", "✅", "✅"] },
	];


export default function PricingPlans() {
	// ✅ State for billing cycle toggle (monthly / yearly)
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

	return (
		<>
		// outer stack: vertical layout for entire pricing section//
			<Stack
				gap={10}
				align="center"
				mx="auto"
				style={
					{
						padding: "2rem",
						backgroundImage: `url("grid-box.svg")`
					}}>

				{/* ---------- Header Section ---------- */}
				<Stack
					align="center"
					gap={8}>
					<Text
						size="xl"
						fw={700}
						ta="center"
						c="black"
						style={
							{ fontSize: "3rem" }
						}>
						Plans for Your Carousel Creation Needs
					</Text>

					<Text
						size="sm"
						ta="center"
						c="dimmed">
						From solo creators to agencies, we have a plan that fits your requirements.
					</Text>
				</Stack>

				{/* ---------- Billing Toggle (Monthly / Yearly) ---------- */}
				<Stack
					gap={8}
					align="center">
					<SegmentedControl
						value={billingCycle}
						// ✅ Changes state when user clicks monthly/yearly
						onChange={
							(val) => setBillingCycle(val as "monthly" | "yearly")
						}
						data={
							[
								{ label: "Monthly", value: "monthly" },
								{ label: "Yearly", value: "yearly" },
							]
						}
					/>

					{/* ✅ Show discount badge only when yearly is selected */}
					{billingCycle === "yearly" && (
						<Badge
							color="#087A68"
							variant="filled"
							size="sm"
							mt={1}
							mb={20}>
							30% OFF ON YEARLY SUBSCRIPTION! - ANNUAL30OFF
						</Badge>
					)}
				</Stack>

				{/* ---------- Paid Plans Grid ---------- */}
				<SimpleGrid
					cols={
						{
							base: 1,
							sm: 2,
							md: 3
						}
					}
					spacing="lg">
					{plans.map((plan) => (
						<PlanCardVertical
							key={plan.name}
							plan={plan}
							billingCycle={billingCycle}
						/>
					))}
				</SimpleGrid>
				{/*above free plan*/}
				<Group
					mt="20px"
					justify="center">
					<Text
						size="sm"
						c="black"
						ta="center">
						if you require additional limits, you can{" "}
						<Text
							component="span"
							fw={700}
							td="underline"
							c="teal">
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
			<Stack>
				<Text
					ta="center"
					c="teal.6"
					fw={600}
				>
					Find the Perfect Plan for Your Social Media Success
				</Text>

				<Text
					ta="center"
					fw={700}
					style={
						{ fontSize: "2rem" }
					}
				>
					PostNitro Plan Comparison
				</Text>

				<Text
					c="dimmed"
					ta="center">
					Compare our plans side-by-side to discover which PostNitro offering best suits your carousel <br />
					creation needs.
				</Text>
				<div
					style={
						{
							marginRight: "150px ",
							marginLeft: "150px"

						}
					}>
					<Table
						horizontalSpacing="xl"
						verticalSpacing="sm"
						withColumnBorders
						striped
						highlightOnHover
					>
						{/* Plan Names Row (Green) */}
						<Table.Thead>
							<Table.Tr>
								<Table.Th>

								</Table.Th>
								{planNames.map((plan) => (
									<Table.Th
										key={plan}
										style={
											{
												color: "green",
												fontWeight: 700
											}
										}>
										{plan}
									</Table.Th>
								))}
							</Table.Tr>
						</Table.Thead>

						{/* Table Body */}
						<Table.Tbody>
							{comparisonRows.map((row, idx) =>
								row.type === "section" ? (
									<Table.Tr
										key={idx}>
										<Table.Td
											colSpan={planNames.length + 1}
											style={
												{
													color: "green",
													fontWeight: 700,
													textAlign: "left"
												}}
										>

											{row.label}
										</Table.Td>
									</Table.Tr>
								) : (
									<Table.Tr
										key={idx}>
										<Table.Td>
											{row.label}
										</Table.Td>
										{row.values!.map((val, i) => (
											<Table.Td
												key={i}>
												{val}
											</Table.Td>
										))}
									</Table.Tr>
								)
							)}
						</Table.Tbody>
					</Table>
					<Button
						ta="left"
						rightSection={<
							ArrowRightIcon size={20}
							color="black"
						/>}
						variant="default"
						mt="md"
					>
						Lets start with the free plan
					</Button>
					<Text
						ta="center"
						c="teal.6"
						fw={600}
					>
						Exclusive Partner Benefits
					</Text>
					<Text
						ta="center"
						fw={700}
						style={
							{ fontSize: "2rem" }
						}
					>
						Offers From Our Embed Partners
					</Text>
					<Text
						c="dimmed"
						ta="center">
						Unlock special discounts on leading social media management platforms with your paid PostNitro  <br />
						subscription. Enhance your social media strategy with our trusted partners.
						Circleboom logo
					</Text>
					

				</div>




			</Stack>
		</>
	);
}



