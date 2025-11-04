"use client";
import React, { useRef, useState } from "react";

/** URL público do seu Google Apps Script (já validado) */
const WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbzmc1gqGMYQSFyayHjYER8rRwJEkHzk59vx7VbigSATvH3QTgEflhoTKxoCfjT1by6k/exec";

export default function Contato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(
    null
  );

  // Dispara quando o iframe termina de carregar a resposta do Apps Script
  const onIframeLoad = () => {
    if (!sending) return; // evita disparo no primeiro render
    setSending(false);

    // sucesso (a submissão por form->iframe não expõe o status; usamos o fluxo que funcionou)
    setToast({ type: "ok", msg: "Diagnóstico enviado com sucesso!" });

    // limpa o formulário
    if (formRef.current) formRef.current.reset();

    // some sozinho depois de 4s
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#222] flex flex-col items-center px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Vamos clarear o seu sistema?
      </h1>

      {/* Formulário com envio garantido (sem CORS) */}
      <form
        ref={formRef}
        action={WEBAPP_URL}
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setSending(true)}
        className="w-full max-w-xl bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block text-sm opacity-80 mb-1">Nome</label>
          <input
            name="nome"
            type="text"
            required
            className="w-full border border-black/10 rounded-lg p-3 focus:ring-2 focus:ring-[#5A6B8C] outline-none"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label className="block text-sm opacity-80 mb-1">E-mail</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-black/10 rounded-lg p-3 focus:ring-2 focus:ring-[#5A6B8C] outline-none"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm opacity-80 mb-1">Objetivo</label>
          <select
            name="objetivo"
            defaultValue="Sistemas de Clareza"
            className="w-full border border-black/10 rounded-lg p-3 focus:ring-2 focus:ring-[#5A6B8C] outline-none"
          >
            <option>Sistemas de Clareza</option>
            <option>Mentoria de Clareza</option>
            <option>Projetos Especiais</option>
          </select>
        </div>

        <div>
          <label className="block text-sm opacity-80 mb-1">Mensagem</label>
          <textarea
            name="mensagem"
            rows={4}
            required
            className="w-full border border-black/10 rounded-lg p-3 focus:ring-2 focus:ring-[#5A6B8C] outline-none"
            placeholder="Conte um pouco do seu contexto..."
          />
        </div>

        <div className="pt-2 text-center">
          <button
            type="submit"
            disabled={sending}
            className={`rounded-2xl px-6 py-3 text-white shadow-sm transition-all ${
              sending
                ? "bg-[#C7A76B]/70 cursor-not-allowed"
                : "bg-[#C7A76B] hover:shadow"
            }`}
          >
            {sending ? "Enviando..." : "Enviar diagnóstico inicial"}
          </button>
        </div>
      </form>

      {/* iframe invisível para submissão silenciosa */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={onIframeLoad}
        title="hidden_iframe"
      />

      {/* Toast simples e elegante */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <div
            className={`rounded-xl px-4 py-3 shadow-md text-sm flex items-center gap-2 ${
              toast.type === "ok"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {toast.type === "ok" ? "✅" : "⚠️"} {toast.msg}
          </div>
        </div>
      )}
    </main>
  );
}

