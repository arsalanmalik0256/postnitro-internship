import React from "react";
import { Table } from "@mantine/core";

interface PlanComparisonTableProps {
    planNames: string[];
    comparisonRows: {
        type: "section" | "data";
        label: string;
        values?: string[];
    }[];
}

function PlanComparisonTable(
    {
        planNames, comparisonRows
    }:
        PlanComparisonTableProps) {
    return (
        <Table
            horizontalSpacing="xl"
            verticalSpacing="sm"
            withColumnBorders
            striped
            highlightOnHover
        >
            {/* Header row */}
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
                            }
                        >
                            {plan}
                        </Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>

            {/* Body rows */}
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
                                    }
                                }
                            >
                                {row.label}
                            </Table.Td>
                        </Table.Tr>
                    ) : (
                        <Table.Tr
                            key={idx}>
                            <Table.Td>
                                {
                                    row.label
                                }
                            </Table.Td>
                            {row.values?.map((val, i) => (
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
    );
}

export default PlanComparisonTable;

