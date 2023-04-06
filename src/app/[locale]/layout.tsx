import Link from "next/link";

export const metadata = {
  title: "Reproduction example",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  return (
    <html lang="en">
      <body>
        {children}
        <p>Locale is {locale}</p>
        <ul>
          <li>
            <Link href="/">Go to home page</Link>
          </li>
          <li>
            <Link href="/page-source/">Go to destination page</Link>
          </li>
          <li>
            <Link href="/test/">Go to slug page</Link>
          </li>
          <li>
            <Link href="/nl/test/">Go to Dutch slug page</Link>
          </li>
        </ul>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [
    {
      locale: "en-US",
    },
    {
      locale: "nl-NL",
    },
  ];
}
