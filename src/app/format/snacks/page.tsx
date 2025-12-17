"use client";

import { useRouter } from "next/navigation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function SnacksPage() {
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
            <h1 className="text-lg font-semibold sm:text-xl">🥨 Закуски</h1>
            <p className="text-[13px] text-white/80 sm:text-sm">
              Короткие действия на 1–5 минут, которые помогают мягко сдвинуться
              с места, когда энергии почти нет.
            </p>
          </header>

          <section className="space-y-2 text-[13px] leading-relaxed text-white/90 sm:text-sm">
            <p>
              Закуски — это действия минимального размера. Их задача не
              «починить» состояние, а дать первый импульс: напомнить телу, что
              движение возможно, и снизить внутреннее сопротивление.
            </p>
            <p>
              Важно, что закуска всегда ощущается как «осилено даже в нуле».
              Если при мысли о действии возникает тяжесть, его стоит упростить:
              сократить время, сделать вариант «на 10% от силы».
            </p>
            <p>
              Хорошие примеры закусок: встать и потянуться, умыться прохладной
              водой, сделать несколько глубоких вдохов, включить одну песню и
              слегка подвигаться.
            </p>
            <p className="text-white/70">
              Принцип: закуска не требует от тебя решения «собраться» — она
              всего лишь предлагает самый маленький шаг, который сейчас реален.
            </p>
          </section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

