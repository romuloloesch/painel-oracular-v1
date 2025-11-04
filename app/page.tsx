'use client';
import React from "react";
import { Brain, MessageSquare, Cog } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#2B2E33] antialiased selection:bg-[#5A6B8C] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 py-4">
          <a href="#top" className="font-light tracking-wide text-lg">
            <span className="font-normal">Loesch & Oráculo</span> <span className="opacity-70">Consultoria</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#manifesto" className="hover:opacity-70 transition-opacity">Manifesto</a>
            <a href="#solucoes" className="hover:opacity-70 transition-opacity">Soluções</a>
            <a href="#contato" className="hover:opacity-70 transition-opacity">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[38rem] h-[38rem] rounded-full bg-[#5A6B8C]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-24 w-[36rem] h-[36rem] rounded-[2rem] bg-[#C7A76B]/5 blur-3xl rotate-6" />
        <div className="max-w-screen-xl mx-auto px-5 py-24 sm:py-28 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Clareza é a <span className="text-[#5A6B8C]">nova velocidade</span>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-black/70">
            Consultoria humana e inteligente para simplificar rotinas, sistemas e decisões.
          </p>
          <div className="mt-10">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm sm:text-base bg-[#C7A76B] text-white shadow-sm hover:shadow transition-shadow">
              Descubra seu Sistema de Clareza
            </a>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-20 border-t border-black/5">
        <div className="max-w-screen-xl mx-auto px-5">
          <h2 className="text-2xl sm:text-3xl font-light">Soluções que simplificam, organizam e humanizam.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card icon={<Brain className="w-6 h-6" />} title="Sistemas de Clareza" subtitle="Diagnóstico + automação leve para empresas.">
              Mapeamos fluxos, removemos ruído e conectamos pessoas e tecnologia para que o essencial flua.
            </Card>
            <Card icon={<MessageSquare className="w-6 h-6" />} title="Mentoria de Clareza" subtitle="Formação executiva para foco e método.">
              Roteiros práticos e acompanhamento para transformar pensamento em execução leve e sustentável.
            </Card>
            <Card icon={<Cog className="w-6 h-6" />} title="Projetos Especiais" subtitle="Soluções personalizadas com IA.">
              Integrações, dashboards e agentes sob medida — tecnologia a serviço do humano, nunca o contrário.
            </Card>
          </div>
          <div className="mt-8">
            <a href="#contato" className="text-sm underline underline-offset-4 decoration-[#5A6B8C]/40 hover:decoration-[#5A6B8C]">Ver mais sobre cada solução</a>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section id="manifesto" className="py-24 bg-[#5A6B8C] text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <blockquote className="text-xl sm:text-2xl font-light leading-relaxed">
            “A Loesch & Oráculo não promete fórmulas mágicas. Promete presença, análise lúcida e resultados simples e reais.”
          </blockquote>
          <p className="mt-6 opacity-80">— Manifesto da Era Turbo</p>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white to-[#F0F2F5] border border-black/5 shadow-sm" aria-hidden>
            {/* Espaço para futura foto P&B com brilho dourado sutil */}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-light">Quem somos</h3>
            <p className="mt-4 text-black/80 leading-relaxed">
              “Eu acredito que clareza é o que liberta. O papel da consultoria é iluminar o essencial e simplificar o necessário.”
            </p>
            <p className="mt-2 text-sm opacity-70">Loesch — Direção Humana</p>
            <div className="mt-6 pt-6 border-t border-black/10">
              <p className="text-black/80 leading-relaxed">
                O Oráculo — Direção Sistêmica: análise, estrutura e inteligência aplicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 border-t border-black/5">
        <div className="max-w-2xl mx-auto px-5">
          <h3 className="text-xl sm:text-2xl font-light">Vamos clarear o seu sistema?</h3>
          <form className="mt-8 grid grid-cols-1 gap-4">
            <label className="grid gap-2">
              <span className="text-sm opacity-80">Nome</span>
              <input className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#5A6B8C]" placeholder="Seu nome" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm opacity-80">E-mail</span>
              <input type="email" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#5A6B8C]" placeholder="voce@exemplo.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm opacity-80">Objetivo</span>
              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#5A6B8C]">
                <option>Sistemas de Clareza</option>
                <option>Mentoria de Clareza</option>
                <option>Projetos Especiais</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm opacity-80">Mensagem</span>
              <textarea rows={5} className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#5A6B8C]" placeholder="Conte um pouco do seu contexto…" />
            </label>
            <div className="pt-2">
              <button type="button" className="rounded-2xl px-6 py-3 bg-[#C7A76B] text-white shadow-sm hover:shadow transition-shadow">
                Enviar diagnóstico inicial
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-screen-xl mx-auto px-5 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="opacity-60">© 2025 Loesch & Oráculo Consultoria</p>
          <p className="opacity-60">Clareza é a nova velocidade.</p>
        </div>
      </footer>
    </main>
  );
}

function Card({ icon, title, subtitle, children }: { icon: React.ReactNode; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 text-[#5A6B8C]">{icon}<span className="text-sm uppercase tracking-wide opacity-80">{title}</span></div>
      <p className="mt-2 text-sm text-black/70">{subtitle}</p>
      <p className="mt-4 text-[15px] leading-relaxed">{children}</p>
    </div>
  );
}
