"use client";
import React, { useState } from "react";
import { Stack, Text, Group, Button, Badge, SegmentedControl, SimpleGrid } from "@mantine/core";
import OfferCard from "../../components/Offers/OfferCard";
import PlanCardVertical from "../../components/PlanCard/PlanCardVertical";
import FreePlanCardHorizontal from "../../components/PlanCard/FreePlanCardHorizontal";
import { ArrowRightIcon } from "@phosphor-icons/react";
import PlanComparisonTable from "../../components/Table/PlanComparisonTable";
import { planNames, comparisonRows } from "../../components/Table/deta/PlanComparisonData";
import { useTranslations } from "next-intl";

// ✅ Type for Plan data
export interface Plan {
  name: string;
  monthly: string;
  yearly: string;
  previousYearly?: string;
  description: string[];
  features: string[];
  highlight?: boolean;
}

// Helper to ensure array
const toStringArray = (value: string | string[]): string[] => (Array.isArray(value) ? value : [value]);

//export default function PricingPlans() {//
const PricingPlans = () => {
  const t = useTranslations("pricing");

  // ✅ State for billing cycle toggle (monthly / yearly)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  // ✅ Paid Plans Data
  const plans: Plan[] = [
    {
      name: t("plans.starter.name"),
      monthly: t("plans.starter.monthly"),
      yearly: t("plans.starter.yearly"),
      previousYearly: t("plans.starter.previousYearly"),
      description: t.raw("plans.starter.description") as string[],
      features: t.raw("plans.starter.features") as string[],
    },
    {
      name: t("plans.solopreneur.name"),
      monthly: t("plans.solopreneur.monthly"),
      yearly: t("plans.solopreneur.yearly"),
      previousYearly: t("plans.solopreneur.previousYearly"),
      description: t.raw("plans.solopreneur.description") as string[],
      features: t.raw("plans.solopreneur.features") as string[],
      highlight: true,
    },
    {
      name: t("plans.team.name"),
      monthly: t("plans.team.monthly"),
      yearly: t("plans.team.yearly"),
      previousYearly: t("plans.team.previousYearly"),
      description: t.raw("plans.team.description") as string[],
      features: t.raw("plans.team.features") as string[],
    },
  ];

  // ✅ Free Plan
  const freePlan: Plan = {
    name: t("plans.freePlan.name"),
    monthly: t("plans.freePlan.monthly"),
    yearly: t("plans.freePlan.yearly"),
    description: t.raw("plans.freePlan.description") as string[],
    features: t.raw("plans.freePlan.features") as string[],

  };

  // ✅ Offers
  const offers = ["circleboom", "contentStudio", "radar", "publer"].map((key) => ({
    title: t(`offers.${key}.title`),
    description: t(`offers.${key}.description`),
    footer: t("offers.footer"),
    buttonText: t("offers.button"),
  }));

  return (
    <>
      {/* Outer Stack */}
      <Stack
        gap={10}
        align="center"
        mx="auto"
        style={{ padding: "2rem", backgroundImage: `url("/grid-box.svg")` }}
      >
        {/* Header */}
        <Stack align="center" gap={8}>
          <Text size="xl" fw={700} ta="center" c="black" style={{ fontSize: "3rem" }}>
            {t("header.title")}
          </Text>
          <Text size="sm" ta="center" c="dimmed">
            {t("header.subtitle")}
          </Text>
        </Stack>

        {/* Billing Toggle */}
        <Stack gap={8} align="center">
          <SegmentedControl
            value={billingCycle}
            onChange={(val) => setBillingCycle(val as "monthly" | "yearly")}
            data={[
              { label: t("billing.monthly"), value: "monthly" },
              { label: t("billing.yearly"), value: "yearly" },
            ]}
          />
          {billingCycle === "yearly" && (
            <Badge color="#087A68" variant="filled" size="sm" mt={1} mb={20}>
              {t("billing.discountBadge")}
            </Badge>
          )}
        </Stack>

        {/* Paid Plans Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {plans.map((plan, index) => (
            <PlanCardVertical key={`${plan.name}-${index}`} plan={plan} billingCycle={billingCycle} />
          ))}
        </SimpleGrid>

        {/* Add-on Info */}
        <Group mt="20px" justify="center">
          <Text size="sm" c="black" ta="center">
            {t("additionalInfo.addonText")}{" "}
            <Text component="span" fw={700} td="underline" c="teal">
              {t("additionalInfo.addonHighlight")}
            </Text>{" "}
            {t("additionalInfo.addonTextSuffix")}
          </Text>
        </Group>

        {/* Free Plan Card */}
        <FreePlanCardHorizontal freeplan={freePlan} billingCycle={billingCycle} />
      </Stack>

      {/* Plan Comparison & Offers */}
      <Stack>
        <Text ta="center" c="teal.9" fw={550}>
          {t("planComparison.cta")}
        </Text>
        <Text ta="center" fw={600} style={{ fontSize: "2.5rem" }}>
          {t("planComparison.title")}
        </Text>
        <Text c="dimmed" ta="center">
          {t("planComparison.subtitle")}
        </Text>

        <div style={{ marginRight: "150px", marginLeft: "150px" }}>
          {planNames && comparisonRows && (
            <PlanComparisonTable planNames={planNames} comparisonRows={comparisonRows} />
          )}

          <Button
            ta="left"
            rightSection={<ArrowRightIcon size={20} color="black" />}
            variant="default"
            mt="md"
          >
            {t("plans.freePlanButton")}
          </Button>

          <Text style={{ fontSize: "1.5rem", marginBottom: "20px" }} ta="center" c="teal.9" fw={500}>
            {t("partners.title")}
          </Text>
          <Text ta="center" fw={700} style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            {t("partners.subtitle")}
          </Text>
          <Text style={{ marginBottom: "40px" }} c="dimmed" ta="center">
            {t("partners.description")}
          </Text>

          <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
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
            rightSection={<ArrowRightIcon size={20} color="white" />}
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

export default PricingPlans




