"use client";

import { useRouter } from "next/navigation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function MainsPage() {
  const router = useRouter();

  return (
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 z-50 flex items-start justify-center overflow-y-auto px-1 py-3 sm:px-2 sm:py-4">
        <div className="mx-auto mt-4 mb-4 flex w-full max-w-md flex-col gap-3 rounded-3xl bg-black/40 px-3 py-4 text-white shadow-xl backdrop-blur-md sm:max-w-2xl sm:px-4 sm:py-5 md:max-w-3xl md:px-5 md:py-6">
          <button
            type="button"
            className="self-start text-xs font-medium text-white/70 hover:text-white sm:text-sm"
            onClick={() => router.push("/")}
          >
            ← Назад к меню
          </button>

          <header className="space-y-1 text-left">
            <h1 className="text-lg font-semibold sm:text-xl">🍝 Основные блюда</h1>
            <p className="text-[13px] text-white/80 sm:text-sm">
              Действия на 15–40 минут, когда уже есть немного ресурса и хочется
              войти в поток или завершить что-то важное.
            </p>
          </header>

          <section className="space-y-2 text-[13px] leading-relaxed text-white/90 sm:text-sm">
            <p>
              Основные блюда — это действия, которые требуют большего
              вовлечения. Они опираются на небольшой запас энергии, который ты
              получаешь после закусок или отдыха.
            </p>
            <p>
              Это может быть короткий рабочий спринт, разбор одной зоны в доме,
              выполнение важной, но ограниченной задачи, фокус‑сессия с
              таймером. Главное — у действия есть чёткие границы по времени и
              объёму.
            </p>
            <p>
              Хорошее основное блюдо отвечает на вопрос: «Если у меня есть
              только 20–30 минут ресурса, что реально улучшит моё состояние или
              ситуацию?» Без попытки «догнать всё» за один заход.
            </p>
            <p className="text-white/70">
              Принцип: одно основное блюдо — это завершённый цикл. После него
              можно честно остановиться, а не превращать его в бесконечный
              марафон продуктивности.
            </p>
          </section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

