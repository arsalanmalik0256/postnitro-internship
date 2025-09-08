"use client";
import {Button, Menu} from '@mantine/core';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { IconSettings, IconPhoto, IconMessageCircle } from '@tabler/icons-react';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo-full.svg" alt="Postnitro" style={{ height: 28 }} />
        </a>

        <nav style={{ flex: 1 }}>
          <ul style={{ display: 'flex', gap: '12px' }}>
            <li>
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <Button variant="light" size="sm" color="dark">{t('nav.gettingStarted')}</Button>
                </Menu.Target>
                <Menu.Dropdown>
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
            <li><a href="#">{t('nav.products')}</a></li>
            <li><a href="#">{t('nav.freeTools')}</a></li>
            <li><a href="#">{t('nav.plans')}</a></li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LanguageSwitcher />
          <Button variant="filled" size="md" radius="xl">{t('buttons.createImagePost')}</Button>
          <Button variant="filled" size="md" radius="xl" color="teal">{t('buttons.createCarousel')}</Button>
        </div>
      </div>
    </div>
  );
}


