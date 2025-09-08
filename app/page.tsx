"use client";
import { Button, Menu } from '@mantine/core';
import LanguageSwitcher from './components/LanguageSwitcher';
import { IconSettings, IconPhoto, IconMessageCircle } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Top bar (Header) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo-full.svg" alt="Postnitro" style={{ height: 28 }} />
        </a>

        {/* Navigation Links */}
        <nav style={{ flex: 1 }}>
          <ul style={{ display: 'flex', gap: '12px' }}>
            <li>
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <Button variant="light" size="sm" color="dark">Getting Started</Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item leftSection={<IconSettings size={14} />}>
                    <a href="https://postnitro.ai/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
                  </Menu.Item>
                  <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    <a href="https://postnitro.ai/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a>
                  </Menu.Item>
                  <Menu.Item leftSection={<IconPhoto size={14} />}>
                    <a href="https://ls.postnitro.ai/affiliates" style={{ color: 'inherit', textDecoration: 'none' }}>Affiliates</a>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>
            <li>
              <a href="#">Products</a>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li><a href="#">LinkedIn Carousel (link to: /carousels/linkedin)</a></li>
                <li><a href="#">Instagram Carousel (link to: /carousels/instagram)</a></li>
                <li><a href="#">TikTok Carousel (link to: /carousels/tiktok)</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Free Tools</a>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li><a href="#">Twitter Banner Maker (link to: /free-ai-tools/twitter-free-banner-header-image-maker)</a></li>
                <li><a href="#">LinkedIn Banner Maker (link to: /free-ai-tools/linkedin-free-banner-header-image-maker)</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Plans</a>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li><a href="#">Basic</a></li>
                <li><a href="#">Pro</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Right controls in one line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LanguageSwitcher />
          <Button variant="filled" size="md" radius="xl">Create Image Post</Button>
          <Button variant="filled" size="md" radius="xl" color="teal">Create Carousel</Button>
        </div>
      </div>

      {/* Navigation styles */}
      <style>{`
        nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        nav > ul > li {
          position: relative;
        }

        nav ul ul {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 160px;
          z-index: 10;
        }

        nav > ul > li:hover > ul {
          display: block;
        }

        nav a {
          text-decoration: none;
          color: black;
          padding: 10px;
        }

        nav > ul > li > a {
          display: block;
          background: #f4f4f4;
          padding: 10px;
          border-radius: 6px;
        }

        nav ul ul li a {
          display: block;
          background: #ddd;
          padding: 10px;
          white-space: nowrap;
        }

        /* Additional styling for the buttons and language dropdown */
        .mantine-Button-filled {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
