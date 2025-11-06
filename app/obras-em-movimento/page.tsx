import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obras em Movimento | Loesch & Oráculo Consultoria",
  description: "Projetos e iniciativas em andamento sob a direção da Loesch & Oráculo.",
};

export default function ObrasEmMovimento() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Obras em Movimento</h1>
      <p>
        Aqui você acompanha os projetos em execução e os avanços que estamos
        construindo com nossos parceiros e clientes.
      </p>
    </main>
  );
}
