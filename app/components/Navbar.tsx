"use client";

import React from 'react';
import { Group, Menu, Button, Badge } from '@mantine/core';
import { SparkleIcon } from '@phosphor-icons/react';
import { IconSettings, IconMessageCircle, IconPhoto } from '@tabler/icons-react';
// import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
	return (
		<Group justify="space-between" m={10}>
			{/* Top bar (Header) */}
			<Group >
				{/* Logo */}
				<a href="/"
					style={
						{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '10px',
							textDecoration: 'none'
						}}>
					<img
						src="/logo-full.svg"
						alt="Postnitro"
						style={
							{ height: 28 }
						} />
				</a>

				<Menu
					trigger="hover"
					openDelay={100}
					closeDelay={400}>
					<Menu.Target>
						<Button
							size="sm"
							variant="subtle"
							color="black"
						>Getting Started</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label>
							Application</Menu.Label>
						<Menu.Item
							leftSection={<IconSettings size={14} />}>
							<a href="https://postnitro.ai/docs"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Docs</a>
						</Menu.Item>
						<Menu.Item
							leftSection={<IconMessageCircle size={14} />}>
							<a href="https://postnitro.ai/blog"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Blog</a>
						</Menu.Item>
						<Menu.Item
							leftSection={<IconPhoto size={14} />}>
							<a href="https://ls.postnitro.ai/affiliates"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Affiliates</a>
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>

				<Menu
					trigger="hover"
					openDelay={100}
					closeDelay={400}>
					<Menu.Target>
						<Button size="sm"
							variant="subtle"
							color="black"
						>Products</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label
						>Application</Menu.Label>
						<Menu.Item
							leftSection={<IconSettings size={14} />}>
							<a href="/carousels/linkedin"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>LinkedIn Carousel</a>
						</Menu.Item>
						<Menu.Item
							leftSection={<IconMessageCircle size={14} />}>
							<a href="/carousels/instagram"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Instagram Carousel</a>
						</Menu.Item>
						<Menu.Item
							leftSection={<IconPhoto size={14} />}>
							<a href="/carousels/tiktok"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>TikTok Carousel</a>
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>

				<Menu
					trigger="hover"
					openDelay={100}
					closeDelay={400}>
					<Menu.Target>
						<Button
							size="sm"
							variant="subtle"
							color="black"
						>Free Tools</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label
						>Application</Menu.Label>
						<Menu.Item
							leftSection={<IconSettings size={14} />}>
							<a href=" /free-ai-tools/twitter-free-banner-header-image-maker)"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Twitter Banner Maker</a>
						</Menu.Item>
						<Menu.Item
							leftSection={<IconMessageCircle size={14} />}>
							<a href="/free-ai-tools/linkedin-free-banner-header-image-maker)"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>Instagram CarouselLinkedIn Banner Maker</a>
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>

				<Button
					component='a'
					size="sm"
					variant="subtle"
					color="black"
					href='/pricing'
				>Plans</Button>
			</Group>

			{/* Right controls in one line */}
			<Group
				style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				{/* <LanguageSwitcher /> */}
				<Button
					variant="default"
					color="rgba(255, 255, 255, 0)"
					size="sm"
					leftSection={
						<SparkleIcon color="teal" weight="bold" />
					}
					rightSection={<Badge
						color="blue"
						size="sm"
					>beta</Badge>}
				>
					Create Image Post
				</Button>
				<Button
					variant="filled"
					size="sm"

					color="teal"
					leftSection={<SparkleIcon color="white" weight="bold" />}
				>Create Carousel</Button>
			</Group>

		</Group>
	);
};

export default Navbar;


