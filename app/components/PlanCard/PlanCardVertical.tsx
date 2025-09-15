import { Card, Group, Button, Text, Stack, Box } from "@mantine/core"
import { CheckCircleIcon, LightningIcon } from "@phosphor-icons/react"
import React from "react"
import { Plan } from "../../pricing/page"


const PlanCardVertical = (
    {
        plan,
        billingCycle
    }: {
        plan: Plan,
        billingCycle: string
    }) => {
    return (
        <Card
            key={plan.name}
            p="lg"

            style={{
                width: 300,
                backgroundColor: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
                transform: plan.highlight ? "scale(1.05)" : "scale(1)",
                zIndex: plan.highlight ? 2 : 1,
                maxHeight: plan.highlight ? 500 : 360,
                // ✅ Shadow style
                boxShadow: plan.highlight
                    ? "10px 10px 0 #087A68" // solid green shadow for highlight
                    : "0 2px 8px rgba(0,0,0,0.15)", // subtle gray shadow for others
                // ✅ Border only if highlighted
                border: plan.highlight ? "2px solid #087A68" : "none"
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
                {plan.description.map((line, i) => (
                    <Text
                        key={i}
                        fw={i === 0 ? 700 : 400}          // bold first line only
                        size={i === 0 ? "md" : "sm"}      // bigger first line
                        c={i === 0 ? "teal.9" : "gray"}    // black first line, gray others
                        style={{ display: "block" }}      // forces new line
                    >
                        {line}
                    </Text>
                ))}


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
                        leftSection={<LightningIcon size={20} />}
                        style={{
                            backgroundColor: plan.highlight ? "#087A68" : "transparent", // middle green, others transparent
                            color: plan.highlight ? "white" : "#087A68", // middle white text, others green text
                            border: plan.highlight ? "none" : "2px solid #087A68", // border only for non-highlight
                        }}
                    >
                        Get Started
                    </Button>
                    <Text size="xs" color="gray" ta="center" mt={6}>
                        *All prices are subject to applicable taxes
                    </Text>
                </Box>
            </Stack>
        </Card>
    )

}

export default PlanCardVertical