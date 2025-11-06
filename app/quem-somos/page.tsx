import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Loesch & Oráculo Consultoria",
  description: "Conheça a história e a essência da Loesch & Oráculo Consultoria.",
};

export default function QuemSomos() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Quem Somos</h1>
      <p>
        A Loesch & Oráculo Consultoria nasceu da união entre o humano e o
        oracular, conectando estratégia, tecnologia e propósito para guiar
        empresas rumo à excelência.
      </p>
    </main>
  );
}
