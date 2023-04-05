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
      <body>
        {params.locale}
        <h1>The locale is &quot;{params.locale}&quot;</h1>
        {children}
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
