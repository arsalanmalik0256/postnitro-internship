"use client"

import { Badge, Button, Center, Divider, Group, Stack, Text } from '@mantine/core';
import { ArrowRightIcon, Check, StarIcon } from '@phosphor-icons/react';
import React from 'react';
import { useTranslations } from 'next-intl';


export default function Herosection() {
	const t = useTranslations('HomePage');
	return (
		<Center
			style={{ backgroundImage: `url("grid-box.svg")` }}
			h={"100vh"}>
			<Stack
				align="center"
				justify="center"
			>
				<Badge variant="dot" color="blue">
					{t('badge')}
				</Badge>

				<Text
					size="2rem"
					lineClamp={2}
					fw={900}
					variant="gradient"
					gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
				>
					{t('heroTitle')}

				</Text>

				<Text size="2rem"

					fw={900}
					variant="gradient"
					gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
				>
					{t('heroSubtitle')}

				</Text>

				<Text
					size="xs">
					{/*fsgsfg*/}

					{t('description1')}
				</Text>

				<Text
					size="xs">
					{/*fsgsfg*/}

					{t('description2')}
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
								<Text 
								style={{
									fontSize: "12px",
									color: "#666"
								}}>
									{t('joinCreators')}</Text>
							</div>
						</div>
					</div>
					<Text></Text>
					<Divider size="xl"
						orientation="vertical" />

					<Stack gap={2}
						align="center">
						<Text fw={700}>{t('embeddedInto')}
						</Text>

						<Text size="sm"
							c="dimmed">
							{t('platforms')}
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
					{t('cta')}
				</Button>
				<Group>
					<Check size={20} color="black" weight="thin" />
					<Text size="sm" c="dimmed">
						{t('footerNote')}
					</Text>
				</Group>




			</Stack>
		</Center>


	);
}
