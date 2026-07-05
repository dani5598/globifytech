"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Mic, Sparkles } from "lucide-react";
import {
  Chip,
  DashboardSection,
  Panel,
} from "@/components/dashboard/primitives";
import {
  AI_CAPABILITIES,
  AI_QUICK_REPLIES,
  AI_SEED_CHAT,
  type ChatMessage,
} from "@/lib/dashboard-data";

const CANNED =
  "Great question! Here's a concise breakdown, with a worked example and a couple of practice prompts to lock it in. Want me to turn this into flashcards or a short quiz?";

export function AIAssistantSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(AI_SEED_CHAT);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "ai", text: CANNED }]);
    }, 1100);
  }

  return (
    <DashboardSection
      id="ai-assistant"
      icon={Bot}
      title="AI Study Assistant"
      description="Ask, summarize, translate, and generate notes or quizzes — instantly."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">
        {/* Chat */}
        <Panel animatedBorder hover={false} className="flex h-[460px] flex-col overflow-hidden">
          {/* header */}
          <div className="flex items-center gap-3 border-b border-[color:var(--border)] px-5 py-3.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#009DFF] to-[#7C3AED] text-white">
              <Bot size={17} />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[color:var(--surface)] bg-[#22c55e]" />
            </span>
            <div>
              <p className="text-sm font-medium text-[color:var(--fg)]">Globify AI Tutor</p>
              <p className="text-[11px] text-[#22c55e]">● Online · GPT-powered</p>
            </div>
            <span className="ml-auto flex items-center gap-1 rounded-full bg-[#009DFF]/10 px-2.5 py-1 text-[11px] text-[#7FD3FF]">
              <Sparkles size={11} /> Beta
            </span>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="dash-scroll flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.role === "ai" && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#009DFF] to-[#7C3AED] text-white">
                    <Bot size={14} />
                  </span>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-tr-sm bg-gradient-to-br from-[#009DFF] to-[#0072BC] text-white"
                      : "rounded-tl-sm border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--fg)]"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#009DFF] to-[#7C3AED] text-white">
                    <Bot size={14} />
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3">
                    {[0, 1, 2].map((n) => (
                      <span
                        key={n}
                        className="h-1.5 w-1.5 rounded-full bg-[#7FD3FF]"
                        style={{ animation: `dash-float 0.9s ease-in-out ${n * 0.15}s infinite` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* quick replies */}
          <div className="dash-scroll flex gap-2 overflow-x-auto px-5 pb-2">
            {AI_QUICK_REPLIES.map((q) => (
              <Chip key={q} onClick={() => send(q)} className="shrink-0">
                {q}
              </Chip>
            ))}
          </div>

          {/* input */}
          <div className="border-t border-[color:var(--border)] p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-2 py-1.5"
            >
              <button
                type="button"
                onClick={() => setListening((v) => !v)}
                aria-label="Voice input"
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  listening
                    ? "bg-[#FF0AE0]/20 text-[#FF6FEF]"
                    : "text-[color:var(--muted)] hover:text-[#7FD3FF]"
                }`}
              >
                <Mic size={17} />
                {listening && (
                  <span
                    className="absolute h-9 w-9 rounded-xl border border-[#FF0AE0]/50"
                    style={{ animation: "dash-pulse-ring 1.4s ease-out infinite" }}
                  />
                )}
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={listening ? "Listening…" : "Ask your AI tutor anything…"}
                className="min-w-0 flex-1 bg-transparent text-sm text-[color:var(--fg)] outline-none placeholder:text-[color:var(--muted)]"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#009DFF] to-[#0072BC] text-white transition-transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </Panel>

        {/* Capabilities */}
        <Panel hover={false} className="p-5">
          <p className="mb-3 text-sm font-medium text-[color:var(--fg)]">What I can do</p>
          <div className="flex flex-col gap-2">
            {AI_CAPABILITIES.map((cap) => (
              <button
                key={cap}
                type="button"
                onClick={() => send(cap)}
                data-cursor-hover=""
                className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-2.5 text-left text-sm text-[color:var(--muted)] transition-all hover:border-[#009DFF]/30 hover:text-[color:var(--fg)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#009DFF]/12 text-[#7FD3FF]">
                  <Sparkles size={12} />
                </span>
                {cap}
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardSection>
  );
}
