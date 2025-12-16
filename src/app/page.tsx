"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/rainbow-borders-button";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const mainMenuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 640);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 z-50 flex items-start justify-center overflow-y-auto px-1 py-3 sm:px-2 sm:py-4">
        <div className="mx-auto mt-4 mb-2 flex w-full max-w-md flex-col gap-1 rounded-3xl bg-black/40 px-2 pt-0 pb-3 text-white shadow-xl backdrop-blur-md sm:mt-8 sm:max-w-2xl sm:gap-1.5 sm:px-3 sm:pt-0 sm:pb-4 md:mt-10 md:max-w-3xl md:px-4 md:pt-0 md:pb-4">
          <header className="flex flex-col items-center gap-1 text-center md:gap-1.5">
            <Image
              src="/logo.svg"
              alt="MoodUp логотип"
              width={320}
              height={320}
               className="mt-3 mb-3 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 filter invert"
            />
            <p className="bg-[linear-gradient(90deg,#fed7aa,#f9a8d4,#c7d2fe,#bae6fd,#e9d5ff)] bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl -mt-0.5">
              MoodUp
            </p>
            <p className="text-sm font-medium text-white/90 sm:text-base -mt-0.5">
              Выбери действие — получи импульс
            </p>
            <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
              {isMobile
                ? "Дофаминовое меню даёт короткие понятные шаги под твоё состояние — чтобы мягко сдвинуться с места."
                : "Дофаминовое меню помогает мягко сдвинуться с места: вместо бесконечного выбора ты получаешь короткие, понятные шаги под своё состояние — от нулевой энергии до необходимости восстановиться."}
            </p>
          </header>

          <div className="flex justify-center">
            <Button
              onClick={() => {
                if (mainMenuRef.current) {
                  mainMenuRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Открыть меню
            </Button>
          </div>

          <section className="flex flex-col gap-3 rounded-2xl bg-black/30 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70 text-center">
              Быстрый выбор по состоянию
            </h2>
            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-3 sm:text-base">
              <button className="moodup-pill w-full text-xs sm:w-auto sm:flex-1 sm:text-sm">
                Нет сил
              </button>
              <button className="moodup-pill w-full text-xs sm:w-auto sm:flex-1 sm:text-sm">
                Нет мотивации
              </button>
              <button className="moodup-pill w-full text-xs sm:w-auto sm:flex-1 sm:text-sm">
                Тревожно
              </button>
              <button className="moodup-pill w-full text-xs sm:w-auto sm:flex-1 sm:text-sm">
                Скучно
              </button>
            </div>
          </section>

          <section
            ref={mainMenuRef}
            className="flex flex-col gap-3 rounded-2xl bg-black/30 p-3 sm:p-4"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70 text-center">
              Основное меню
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  ⚡ Быстрый дофамин (1–5 минут)
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Для нулевой энергии.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Встать и потянуться</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Холодная вода для лица</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Музыка + движение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Микро-победа (маленькая задача)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🚶 Телесный
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Через движение и ощущения.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Прогулка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Дыхание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Растяжка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Контрастные ощущения (тепло / холод)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🧠 Ментальный
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Для фокуса и ясности.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Запись мыслей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>План на 15 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Чтение 1 страницы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Упрощение задачи</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🎨 Творческий
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Когда нужен интерес и вовлечённость.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Рисование / письмо</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Фото</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Музыка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Создание чего-то «без цели»</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🧹 Контроль и порядок
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Дофамин через завершение.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Убрать одну зону</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Закрыть один «висяк»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Чеклист «сделано»</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🤝 Социальный
                </h3>
                <p className="text-[11px] font-medium text-pink-200 sm:text-xs md:text-sm">
                  Через контакт.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Написать одному человеку</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Короткий разговор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Поддержка / благодарность</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 p-3 text-[11px] sm:text-xs md:text-sm md:col-span-2">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  🌿 Восстановление
                </h3>
                <p className="text-[11px] font-medium text-emerald-200 sm:text-xs md:text-sm">
                  Не про стимул, а про ресурс.
                </p>
                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Сон / пауза</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Тишина</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Природа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">✔</span>
                    <span>Медленное действие</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
