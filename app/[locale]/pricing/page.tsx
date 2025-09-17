"use client";
import React, { useState } from "react";
import { Stack, Text, Group, Button, Badge, SegmentedControl, SimpleGrid, Table, } from "@mantine/core";
import OfferCard from "../../components/Offers/OfferCard"
import PlanCardVertical from "../../components/PlanCard/PlanCardVertical"
import FreePlanCardHorizontal from "../../components/PlanCard/FreePlanCardHorizontal";
import { ArrowRightIcon, } from "@phosphor-icons/react";
import PlanComparisonTable from "../../components/Table/ PlanComparisonTable";
import { planNames, comparisonRows } from "../../components/Table/deta/PlanComparisonData";
import { useTranslations } from "next-intl";
import { t } from "i18next";




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

// Helper to ensure array
const asStringArray = (value: string | string[] | object): string[] => {
	if (Array.isArray(value)) return value;
	if (typeof value === "string") return [value];
	// If it's an object, extract values (or handle as needed)
	if (typeof value === "object" && value !== null) return Object.values(value).map(String);
	return [];
};


// ✅ Paid Plans Data
const plans: Plan[] = [
	{
		name: t("plans.starter.name"),
		monthly: t("plans.starter.monthly"),
		yearly: t("plans.starter.yearly"),
		previousYearly: t("plans.starter.previousYearly"),
		description: asStringArray(t("plans.starter.description", { returnObjects: true })),
		features: asStringArray(t("plans.starter.features", { returnObjects: true })),
	},
	{
		name: t("plans.solopreneur.name"),
		monthly: t("plans.solopreneur.monthly"),
		yearly: t("plans.solopreneur.yearly"),
		previousYearly: t("plans.solopreneur.previousYearly"),
		description: asStringArray(t("plans.starter.description", { returnObjects: true })),
		features: asStringArray(t("plans.starter.features", { returnObjects: true })),
		highlight: true, // ✅ middle card highlighted (special styling)
	},
	{
		name: t("plans.team.name"),
		monthly: t("plans.team.monthly"),
		yearly: t("plans.team.yearly"),
		previousYearly: t("plans.team.previousYearly"),
		description: asStringArray(t("plans.team.description", { returnObjects: true })),
		features: asStringArray(t("plans.team.features", { returnObjects: true })),
	},
];

// ✅ Free Plan (separately shown below)
const freePlan: Plan = {
	name: t("plans.freePlan.name"),
	monthly: t("plans.freePlan.monthly"),
	yearly: t("plans.freePlan.yearly"),
	description: asStringArray(t("plans.freePlan.description", { returnObjects: true })),
	features: asStringArray(t("plans.freePlan.features", { returnObjects: true })),
};
const offers = [
	"circleboom",
	"contentStudio",
	"radar",
	"publer",
].map((key) => ({
	title: t(`offers.${key}.title`),
	description: t(`offers.${key}.description`),
	footer: t("offers.footer"),
	buttonText: t("offers.button"),
}));


export default function PricingPlans() {
	const t = useTranslations("pricing");
	// ✅ State for billing cycle toggle (monthly / yearly)
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

	return (
		<>

			{/* Outer Stack: vertical layout for entire pricing section*/}
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
						{t("header.title")}
					</Text>

					<Text
						size="sm"
						ta="center"
						c="dimmed">
						{t("header.subtitle")}
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
								{ label: t("billing.monthly"), value: "monthly" },
								{ label: t("billing.yearly"), value: "yearly" },
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
							{t("billing.discountBadge")}
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
					{plans?.map((plan, index) => (
						<PlanCardVertical
							key={`${plan.name}-${index}`} // ensures unique key even if names repeat
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
						{t("additionalInfo.addonText")}{" "}
						<Text
							component="span"
							fw={700}
							td="underline"
							c="teal">
							{t("additionalInfo.addonHighlight")}
						</Text>{" "}
						{t("additionalInfo.addonTextSuffix")}
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
					c="teal.9"
					fw={550}
				>
					{t("planComparison.cta")}
				</Text>

				<Text
					ta="center"
					fw={600}
					style={
						{ fontSize: "2.5rem" }
					}
				>
					{t("planComparison.title")}
				</Text>

				<Text
					c="dimmed"
					ta="center">
					{t("planComparison.subtitle")}
				</Text>
				<div
					style={
						{
							marginRight: "150px ",
							marginLeft: "150px"

						}
					}>
					<PlanComparisonTable
						planNames={planNames}
						comparisonRows={comparisonRows}
					/>
					<Button
						ta="left"
						rightSection={<
							ArrowRightIcon size={20}
							color="black"
						/>}
						variant="default"
						mt="md"
					>
						{t("plans.freePlanButton")}
					</Button>
					<Text
						style={
							{
								fontSize: "1.5rem",
								marginBottom: "20px"
							}
						}
						ta="center"
						c="teal.9"
						fw={500}
					>
						{t("partners.title")}
					</Text>
					<Text
						ta="center"
						fw={700}
						style={
							{
								fontSize: "2.5rem",
								marginBottom: "20px"
							}
						}
					>
						{t("partners.subtitle")}
					</Text>
					<Text
						style={{ marginBottom: "40px" }}
						c="dimmed"
						ta="center">
						{t("partners.description")}
					</Text>
					<SimpleGrid
						cols={2}
						spacing="lg"
						verticalSpacing="lg">
						{offers.map((offer, idx) => (
							<OfferCard
								key={idx}
								title={offer.title}
								description={offer.description}
								footer={offer.footer}
								buttonText={offer.buttonText}
							/>
						))}
					</SimpleGrid>
					<Button
						ta="left"
						rightSection={<
							ArrowRightIcon size={20}
							color="white"
						/>}
						variant="filled"
						color="teal.9"
						mt="md"
					>
						{t("partners.cta")}
					</Button>


				</div>
			</Stack>
		</>
	);
}



