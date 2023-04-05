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
  return (
    <html lang="en">
      <p>Locale is {params.locale}</p>
      <body>{children}</body>
      <p>
        <Link href="/">Go to home page</Link>
      </p>
      <p>
        <Link href="/page-source/">Go to destination page</Link>
      </p>
      <p>
        <Link href="/test/">Go to slug page</Link>
      </p>
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
