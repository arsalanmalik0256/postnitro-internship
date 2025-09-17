"use client";
import React, { useMemo, useState } from 'react';
import i18next from 'i18next';
import { Menu, Button } from '@mantine/core';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

type LanguageOption = {
  code: string;
  label: string;
  flagSrc: string;
};

const LanguageSwitcher: React.FC = () => {
  const languages: LanguageOption[] = useMemo(
    () => [
      { code: 'en', label: 'English', flagSrc: '/flags/GB-UKM - United Kingdom.svg' },
      { code: 'zh', label: 'Chinese', flagSrc: '/flags/CN - China.svg' },
      { code: 'es', label: 'Spanish', flagSrc: '/flags/ES - Spain.svg' },
      { code: 'fr', label: 'French', flagSrc: '/flags/FR - France.svg' },
    ],
    []
  );

  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const current = languages.find(l => l.code === selectedLanguage) ?? languages[0];

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <Menu trigger="hover" openDelay={100} closeDelay={300} width={200}>
      <Menu.Target>
        <Button variant="subtle" color="dark">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              src={current.flagSrc}
              alt={current.label}
              style={{ width: 20, height: 15, marginRight: 10 }}
            />
            {current.label}
          </span>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {languages.map(lang => (
          <Link key={lang.code} href={`/${lang.code}${pathname?.replace(/^\/[a-z]{2}(\b|\/)/, '/') || '/'}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Menu.Item onClick={() => changeLanguage(lang.code)}>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src={lang.flagSrc}
                  alt={lang.label}
                  style={{ width: 20, height: 15, marginRight: 10 }}
                />
                {lang.label}
              </span>
            </Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSwitcher;


