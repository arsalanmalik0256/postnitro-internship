"use client";

import React, { useMemo } from "react";
import { Menu, Button } from "@mantine/core";
import { usePathname, useRouter } from "../../i18n/routing"
import { Link } from "../../i18n/routing"; // ✅ next-intl aware Link

type LanguageOption = {
    code: string;
    label: string;
    flagSrc: string;
};

const LanguageSwitcher: React.FC = () => {
    const languages: LanguageOption[] = useMemo(
        () => [
            { code: "en", label: "English", flagSrc: "/flags/GB-UKM - United Kingdom.svg" },
            { code: "zh", label: "中文", flagSrc: "/flags/CN - China.svg" },
            { code: "es", label: "Español", flagSrc: "/flags/ES - Spain.svg" },
            { code: "fr", label: "Français", flagSrc: "/flags/FR - France.svg" },
        ],
        []
    );

    const pathname = usePathname();
    const cleanPathname = pathname.replace(/^\/(en|zh|es|fr)/, "") || "/";

    // default to English if nothing matches
    const current = languages.find((l) =>
        pathname?.startsWith(`/${l.code}`)
    ) ?? languages[0];

    return (
        <Menu
            trigger="hover"
            openDelay={100}
            closeDelay={300}
            width={200}>
            <Menu.Target>
                <Button
                    variant="subtle"
                    color="dark">
                        
                    <span
                        style={
                            {
                                display: "inline-flex",
                                alignItems: "center"
                            }
                        }>
                        <img
                            src={current.flagSrc}
                            alt={current.label}
                            style={{
                                width: 20,
                                height: 15,
                                marginRight: 10
                            }}
                        />
                        {current.label}
                    </span>
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                {languages.map((lang) => (
                    <Menu.Item
                        key={lang.code}
                        component={Link}
                        href={pathname || "/"}
                        locale={lang.code} // ✅ changes next-intl locale
                    >
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center"
                        }}>
                            <img
                                src={lang.flagSrc}
                                alt={lang.label}
                                style={{
                                    width: 20,
                                    height: 15,
                                    marginRight: 10
                                }}
                            />
                            {lang.label}
                        </span>
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
};

export default LanguageSwitcher;
