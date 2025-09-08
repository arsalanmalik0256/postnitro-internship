import '@mantine/core/styles.css';
import '../styles/Navbar.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript, mantineHtmlProps} from '@mantine/core';
import {NextIntlClientProvider} from 'next-intl';
import {theme} from '../../theme';
import Navbar from '../components/Navbar';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Postnitro',
  description: 'Internationalized app'
};

export default async function LocaleLayout({children, params}: any) {
  const messages = (await import(`../../i18n/messages/${params?.locale || 'en'}.json`)).default;
  return (
    <html lang={params.locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}


