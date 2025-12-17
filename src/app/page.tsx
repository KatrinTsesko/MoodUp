"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isFastDopamineOpen, setIsFastDopamineOpen] = useState(false);
  const [isBodyOpen, setIsBodyOpen] = useState(false);
  const [isMentalOpen, setIsMentalOpen] = useState(false);
  const [isCreativeOpen, setIsCreativeOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
  const mainMenuRef = useRef<HTMLElement | null>(null);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 z-50 flex items-start justify-center overflow-y-auto px-1 py-3 sm:px-2 sm:py-4">
        <div className="mx-auto mt-1 mb-2 flex w-full max-w-md flex-col gap-1 rounded-3xl bg-black/40 px-2 pt-0 pb-3 text-white shadow-xl backdrop-blur-md sm:mt-4 sm:max-w-2xl sm:gap-1.5 sm:px-3 sm:pt-0 sm:pb-4 md:mt-6 md:max-w-3xl md:px-4 md:pt-0 md:pb-4">
          <header className="flex flex-col items-center gap-1 text-center md:gap-1.5">
            <Link href="/admin" aria-label="Открыть админ-панель">
              <Image
                src="/logo.svg"
                alt="MoodUp логотип"
                width={320}
                height={320}
                className="mt-3 mb-3 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 filter invert"
              />
            </Link>
            <p className="bg-[linear-gradient(90deg,#fed7aa,#f9a8d4,#c7d2fe,#bae6fd,#e9d5ff)] bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl -mt-0.5">
              MoodUp
            </p>
            <p className="text-sm font-medium text-white/90 sm:text-base -mt-0.5">
              Выбери действие — получи импульс
            </p>
            <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
              Дофаминовое меню помогает мягко сдвинуться с места: вместо
              бесконечного выбора ты получаешь короткие, понятные шаги под своё
              состояние — от нулевой энергии до необходимости восстановиться
            </p>
          </header>

          <section className="flex flex-col gap-3 rounded-2xl bg-black/30 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70 text-center">
              Быстрый выбор по состоянию
            </h2>
            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-3 sm:text-base">
              <button className="moodup-pill flex w-full flex-col items-start text-xs sm:w-auto sm:flex-1 sm:text-sm">
                <span className="font-semibold">Нет сил</span>
                <span className="mt-0.5 text-[11px] text-white/70">
                  Минимальные действия, без усилий
                </span>
              </button>
              <button className="moodup-pill flex w-full flex-col items-start text-xs sm:w-auto sm:flex-1 sm:text-sm">
                <span className="font-semibold">Нет мотивации</span>
                <span className="mt-0.5 text-[11px] text-white/70">
                  Чтобы начать, не заставляя себя
                </span>
              </button>
              <button className="moodup-pill flex w-full flex-col items-start text-xs sm:w-auto sm:flex-1 sm:text-sm">
                <span className="font-semibold">Тревожно</span>
                <span className="mt-0.5 text-[11px] text-white/70">
                  Успокоить тело, не мысли
                </span>
              </button>
              <button className="moodup-pill flex w-full flex-col items-start text-xs sm:w-auto sm:flex-1 sm:text-sm">
                <span className="font-semibold">Скучно</span>
                <span className="mt-0.5 text-[11px] text-white/70">
                  Вернуть интерес
                </span>
              </button>
            </div>
          </section>

          <section className="mt-2 flex flex-col gap-3 rounded-2xl bg-black/30 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70 text-center">
              Формат меню
            </h2>
            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 sm:text-sm">
              <Link
                href="/format/snacks"
                className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                <h3 className="text-sm font-semibold">
                  🥨 Закуски
                </h3>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  1–5 минут, чтобы мягко сдвинуться с места
                </p>
                <p className="text-[11px] text-white/60">
                  Для состояния, когда энергии почти нет
                </p>
              </Link>
              <Link
                href="/format/mains"
                className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                <h3 className="text-sm font-semibold">
                  🍝 Основные блюда
                </h3>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  15–40 минут, когда уже есть немного ресурса
                </p>
                <p className="text-[11px] text-white/60">
                  Помогают войти в поток или завершить важное
                </p>
              </Link>
              <Link
                href="/format/desserts"
                className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                <h3 className="text-sm font-semibold">
                  🍰 Десерты
                </h3>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  Как награда после шага или задачки
                </p>
                <p className="text-[11px] text-white/60">
                  Лёгкие, приятные действия без чувства «надо»
                </p>
              </Link>
              <Link
                href="/format/special"
                className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                <h3 className="text-sm font-semibold">
                  ⭐ Особые блюда
                </h3>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  Редкие события, которые требуют подготовки
                </p>
                <p className="text-[11px] text-white/60">
                  Например, выезд на природу или день без задач
                </p>
              </Link>
            </div>
          </section>

          <section
            ref={mainMenuRef}
            className="flex flex-col gap-3 rounded-2xl bg-black/30 p-3 sm:p-4"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] text-white/70 sm:text-xs">
                <span>🥨 закуска</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>🍝 основное</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>🍰 десерт</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>⭐ особое</span>
              </div>
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70 text-center">
              Основное меню
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsFastDopamineOpen((prev) => !prev)}
                  aria-expanded={isFastDopamineOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      ⚡ Быстрый дофамин (1–5 минут)
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Для нулевой энергии
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Помогает начать движение, но не решает всё состояние
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isFastDopamineOpen ? "−" : "+"}
                  </span>
                </button>
                {isFastDopamineOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Встать и потянуться")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Встать и потянуться</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 1–2 минуты · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Холодная вода для лица")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Холодная вода для лица</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 1 минута · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Музыка + движение")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Музыка + движение</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–5 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Микро-победа (маленькая задача)")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Микро-победа (маленькая задача)</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–10 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsBodyOpen((prev) => !prev)}
                  aria-expanded={isBodyOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🚶 Телесный
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Через движение и ощущения
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Помогает разгрузить тело, но не заменяет отдых и лечение
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isBodyOpen ? "−" : "+"}
                  </span>
                </button>
                {isBodyOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Прогулка")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Прогулка</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 10–20 минут · 🪫/🔋 низкая–средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Дыхание")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Дыхание</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–5 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Растяжка")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Растяжка</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–10 минут · 🔋 средняя энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() =>
                          setSelectedAction("Контрастные ощущения (тепло / холод)")
                        }
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Контрастные ощущения (тепло / холод)</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–7 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsMentalOpen((prev) => !prev)}
                  aria-expanded={isMentalOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🧠 Ментальный
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Для фокуса и ясности
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Помогает навести порядок в голове, но не заменяет терапию
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isMentalOpen ? "−" : "+"}
                  </span>
                </button>
                {isMentalOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Запись мыслей")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Запись мыслей</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–10 минут · 🪫/🔋 низкая–средняя энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("План на 15 минут")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>План на 15 минут</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 10–15 минут · 🔋 средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Чтение 1 страницы")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Чтение 1 страницы</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–5 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Упрощение задачи")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Упрощение задачи</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🔋 средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsCreativeOpen((prev) => !prev)}
                  aria-expanded={isCreativeOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🎨 Творческий
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Когда нужен интерес и вовлечённость
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Помогает вернуть интерес, но не отменяет усталость и
                      выгорание
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isCreativeOpen ? "−" : "+"}
                  </span>
                </button>
                {isCreativeOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Рисование / письмо")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Рисование / письмо</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 10–20 минут · 🔋 средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Фото")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Фото</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🔋 средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Музыка")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Музыка</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🪫/🔋 низкая–средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() =>
                          setSelectedAction("Создание чего-то «без цели»")
                        }
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Создание чего-то «без цели»</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 15–30 минут · 🔋 средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsOrderOpen((prev) => !prev)}
                  aria-expanded={isOrderOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🧹 Контроль и порядок
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Дофамин через завершение
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Помогает почувствовать контроль, но не обязан превращаться
                      в марафон продуктивности
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isOrderOpen ? "−" : "+"}
                  </span>
                </button>
                {isOrderOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Убрать одну зону")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Убрать одну зону</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🔋 средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Закрыть один «висяк»")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Закрыть один «висяк»</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 10–30 минут · 🔋 средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Чеклист «сделано»")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Чеклист «сделано»</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–10 минут · 🪫/🔋 низкая–средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsSocialOpen((prev) => !prev)}
                  aria-expanded={isSocialOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🤝 Социальный
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Через контакт
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Про тёплый контакт, а не обязаловку и сложные разговоры
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isSocialOpen ? "−" : "+"}
                  </span>
                </button>
                {isSocialOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Написать одному человеку")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Написать одному человеку</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–5 минут · 🪫/🔋 низкая–средняя энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Короткий разговор")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Короткий разговор</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🔋 средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() =>
                          setSelectedAction("Поддержка / благодарность")
                        }
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Поддержка / благодарность</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 3–10 минут · 🪫/🔋 низкая–средняя энергия · 🍰
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm md:col-span-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setIsRecoveryOpen((prev) => !prev)}
                  aria-expanded={isRecoveryOpen}
                >
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      🌿 Восстановление
                    </h3>
                    <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                      Не про стимул, а про ресурс
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      Про восстановление ресурса, а не про «стать эффективнее»
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {isRecoveryOpen ? "−" : "+"}
                  </span>
                </button>
                {isRecoveryOpen && (
                  <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 text-white/90">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Сон / пауза")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Сон / пауза</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ от 10 минут · 🪫 низкая энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Тишина")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Тишина</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 5–15 минут · 🪫 низкая энергия · 🥨
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Природа")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Природа</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 30–60 минут · 🔋 средняя энергия · ⭐
                          </span>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-start gap-2 rounded-xl bg-white/5 px-2 py-1.5 text-left hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                        onClick={() => setSelectedAction("Медленное действие")}
                      >
                        <span className="mt-0.5 text-emerald-300">✔</span>
                        <div className="flex flex-col gap-0.5">
                          <span>Медленное действие</span>
                          <span className="text-[10px] text-white/70">
                            ⏱ 10–30 минут · 🪫/🔋 низкая–средняя энергия · 🍝
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </section>

          <section className="mt-2 flex flex-col gap-2 rounded-2xl bg-black/40 p-4 text-xs text-white/90 sm:p-5 sm:text-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-red-200 text-center">
              🚫 Не из этого меню сейчас
            </h2>
            <p className="text-[11px] text-white/75 sm:text-xs">
              Когда состояние и так нестабильное:
            </p>
            <ul className="mt-1 space-y-1 text-white/85">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-300">✖</span>
                <span>Бесконечный скролл и ныряние в ленты.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-300">✖</span>
                <span>Слишком агрессивные стимулы и перегруз.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-300">✖</span>
                <span>Резкие решения под чувством «всё или ничего».</span>
              </li>
            </ul>
            <p className="mt-2 text-[11px] text-white/70 sm:text-xs">
              Это не запреты, а мягкое напоминание: сейчас лучше опираться на бережные действия из меню.
            </p>
          </section>

          {selectedAction && (
            <div className="mt-3 rounded-2xl bg-emerald-900/70 p-3 text-xs text-white/90 shadow-lg sm:p-4 sm:text-sm">
              <p className="font-medium">
                ✔ Даже маленькое действие — это движение.
              </p>
              <p className="mt-1 text-white/80">
                Ты выбрал(а): <span className="font-semibold">{selectedAction}</span>
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 hover:bg-white/20 sm:text-sm"
                  onClick={() => setSelectedAction(null)}
                >
                  Ещё одно маленькое
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 hover:bg-white/15 sm:text-sm"
                  onClick={() => setSelectedAction(null)}
                >
                  Хватит на сегодня
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
