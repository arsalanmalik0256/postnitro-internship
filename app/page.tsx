"use client"

import { Badge, Button, Center, Divider, Group, Stack, Text } from '@mantine/core';
import { ArrowRightIcon, Check, StarIcon } from '@phosphor-icons/react';
import React from 'react';


export default function Herosection() {
	return (
		<Center 
		style={{backgroundImage: `url("grid-box.svg")`}}
		h={"100vh"}>
			<Stack align="center"
				justify="center">





				<Badge variant="dot"
					color="blue">
					AI-Powered Carousel Generator for Viral Content
				</Badge>

				<Text size="2rem"
					lineClamp={2}
					fw={900}
					variant="gradient"
					gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
				>
					AI-Powered Carousel Generator for Instagram, LinkedIn

				</Text>

				<Text size="xl"

					fw={900}
					variant="gradient"
					gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
				>
					& More

				</Text>

				<Text
					size="xs">
					{/*fsgsfg*/}
					PostNitro's AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more. Boost your social media engagement with customizable, brand-
				</Text>
				<Text
					size="xs">
					{/*fsgsfg*/}
					aligned content generated in minutes.
				</Text>

				<Group align="center"
					gap="sm">
					<div style={{
						display: "flex",
						alignItems: "center",
						gap: "8px"
					}}>
						<div style={{
							display: "flex",
							alignItems: "center",
							gap: "8px"
						}}>
							{/* Avatar */}
							<img
								src="user-collected.webp"
							/>

							{/* Stars + Text */}
							<div style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start"
							}}>
								{/* Stars Row */}
								<div style={{ display: "flex", gap: "2px" }}>
									<StarIcon size={20} color="orange" weight="fill" />
									<StarIcon size={20} color="orange" weight="fill" />
									<StarIcon size={20} color="orange" weight="fill" />
									<StarIcon size={20} color="orange" weight="fill" />
									<StarIcon size={20} color="orange" weight="fill" />
									<Text fw={700}>5.0</Text>
								</div>

								{/* Text below stars */}
								<text style={{
									fontSize: "12px",
									color: "#666"
								}}>
									Join 32,000+ Creators</text>
							</div>
						</div>
					</div>
					<Text></Text>
					<Divider size="xl"
						orientation="vertical" />

					<Stack gap={2}
						align="center">
						<Text fw={700}>Embedded Into
						</Text>

						<Text size="sm"
							c="dimmed">
							40+SMM Platforms
						</Text>
					</Stack>
					<img
						src="embed-collected.png"
					/>


				</Group>
				<Button
					variant="filled"
					color="#087A68"
					size="xl"
					radius="md"
					rightSection={
						<ArrowRightIcon size={20} color="white" weight="bold" />
					}
				>
					Start Creating Free Carousels

				</Button>
				<Group>
					<Check size={20} color="black" weight="thin" />
					<Text size="sm" c="dimmed">
						No Credit Card Required | Free Downloads Every Month
					</Text>
				</Group>




			</Stack>
		</Center>


	);
}
