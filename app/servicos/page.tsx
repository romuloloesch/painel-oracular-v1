import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Loesch & Oráculo Consultoria",
  description: "Descubra os serviços que impulsionam o crescimento sustentável de sua empresa.",
};

export default function Servicos() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Serviços</h1>
      <p>
        Atuamos com consultoria estratégica, gestão da qualidade, automação de
        processos e implantação de sistemas inteligentes de governança.
      </p>
    </main>
  );
}
