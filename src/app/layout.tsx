import Link from "next/link";

export const metadata = {
  title: "Reproduction example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
