import { Card, Group, Button, Text, Stack } from "@mantine/core";
import { CheckCircleIcon, LightningIcon } from "@phosphor-icons/react";
import React from "react";

export interface FreePlan {
  name: string;
  monthly: string;
  yearly: string;
  previousYearly?: string;
  description: string[];
  features: string[];
  highlight?: boolean;
};
// ✅ Type for Free Plan



const FreePlanCardHorizontal = (
  {
    freeplan,
    billingCycle
  }: {
    freeplan: FreePlan,
    billingCycle: "monthly" | "yearly"
  }) => {


  return (
    <Card
      shadow="sm"
      p="lg"
      style={{
        width: "35%",
        border: "1px solid #ccc",
        marginTop: 10,
        marginBottom: 20,
        minHeight: 120,
      }}
    >
      <Group align="center" gap="xl" wrap="nowrap">
        {/* Left Side */}
        <Stack align="flex-start" gap="xs">
          
          <Text fw={700} size="lg" c="teal.9">
            {freeplan.name}
          </Text>
          <Text fw={700} size="lg">
            {billingCycle === "monthly" ? freeplan.monthly : freeplan.yearly}
          </Text>
          <Text size="xs" color="gray" mt={5}>
            {freeplan.description.join(" ")}
          </Text>
        </Stack>

        {/* Right Side Features */}
        <Stack gap={6}>
          {freeplan.features.map((feature: string, index: number) => (
            <Group key={index} gap={6} align="center">
              <CheckCircleIcon size={18} color="#087A68" weight="thin" />
              <Text size="sm" color="black">
                {feature}
              </Text>
            </Group>
          ))}
        </Stack>

        {/* Button */}
        <Button
          variant="outline"
          color="#087A68"
          leftSection={<LightningIcon size={18} color="#087A68" weight="thin" />}
          style={{ backgroundColor: "white", marginLeft: 50 }}
        >
          Get Started
        </Button>
      </Group>
    </Card>
  );
};


export default FreePlanCardHorizontal

