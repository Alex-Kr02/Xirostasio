import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ | Premium Ελληνικά Κρέατα",
  description: "Υψηλής ποιότητας χοιρινό κρέας από τη φάρμα μας στα Οινόφυτα.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
