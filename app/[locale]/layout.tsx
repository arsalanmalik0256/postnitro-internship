import "@mantine/core/styles.css";
import React, { use } from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../../theme";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "../components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}



export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout(props: RootLayoutProps) {
  const params = use(props.params);
  const {
    locale
  } = params;

  const {
    children
  } = props;
 console.log("6+5+654+6",locale)
  const messages = useMessages()

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        {/* ✅ added locale + messages */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider theme={theme}>
            <Navbar />
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
