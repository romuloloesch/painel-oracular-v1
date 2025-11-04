import "./../styles/globals.css";

export const metadata = {
  title: "Loesch & Oráculo Consultoria",
  description: "Clareza é a nova velocidade."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
