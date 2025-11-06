import "../styles/globals.css";

export const metadata = {
  title: "Loesch & Oráculo Consultoria",
  description: "Clareza é a nova velocidade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-40M7HQI87Q"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-40M7HQI87Q');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
