"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type AdminItem = {
  id: string;
  icon: string;
  description: string;
};

const ICON_OPTIONS: { value: string; label: string }[] = [
  { value: "/logo.svg", label: "Логотип MoodUp" },
  { value: "🥨", label: "Закуска" },
  { value: "🍝", label: "Основное" },
  { value: "🍰", label: "Десерт" },
  { value: "⭐", label: "Особое" },
];

const STORAGE_KEY = "moodup-admin-items";

export default function AdminPage() {
  const [items, setItems] = useState<AdminItem[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as AdminItem[];
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return [];
    } catch {
      return [];
    }
  });
  const [selectedIcon, setSelectedIcon] = useState<string>(ICON_OPTIONS[0]?.value ?? "/logo.svg");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!description.trim()) return;
    const newItem: AdminItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      icon: selectedIcon,
      description: description.trim(),
    };
    setItems((prev) => [newItem, ...prev]);
    setDescription("");
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const renderIcon = (icon: string) => {
    if (icon.startsWith("/")) {
      return (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-1">
          <Image src={icon} alt="" width={24} height={24} className="h-6 w-6 invert" />
        </span>
      );
    }
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">
        {icon}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] px-3 py-4 text-white sm:px-4 sm:py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-3xl bg-black/40 p-4 shadow-xl backdrop-blur-md sm:p-6">
        <header className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
              Админ-панель MoodUp
            </h1>
            <p className="text-xs text-white/70 sm:text-sm">
              Добавляй новые элементы с иконкой и описанием, чтобы затем использовать их в меню.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 hover:bg-white/20 sm:text-sm"
          >
            На главную
          </Link>
        </header>

        <section className="flex flex-col gap-3 rounded-2xl bg-white/5 p-3 sm:p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Новый элемент
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-xs font-medium text-white/70">
                SVG / иконка
              </span>
              <div className="flex flex-wrap gap-2">
                {ICON_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedIcon(option.value)}
                    className={`flex items-center gap-2 rounded-2xl px-2 py-1.5 text-xs transition ${
                      selectedIcon === option.value
                        ? "bg-emerald-500/80 text-black"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {renderIcon(option.value)}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-white/70">
              Описание
            </span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-white/40 focus:border-emerald-400/80 sm:text-sm"
              placeholder="Например: короткое действие для нулевой энергии"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-black shadow-md hover:bg-emerald-400 sm:text-sm disabled:cursor-not-allowed disabled:bg-emerald-500/60"
              disabled={!description.trim()}
            >
              Добавить
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl bg-white/5 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Список элементов
            </h2>
            <span className="text-[10px] text-white/60 sm:text-xs">
              Всего: {items.length}
            </span>
          </div>
          {items.length === 0 ? (
            <p className="text-xs text-white/60 sm:text-sm">
              Пока нет добавленных элементов. Добавь первый через форму выше.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 text-xs sm:text-sm"
                >
                  {renderIcon(item.icon)}
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="whitespace-pre-wrap text-white/90">
                      {item.description}
                    </p>
                    <span className="text-[10px] text-white/40">
                      ID: {item.id}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70 hover:bg-white/15"
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
