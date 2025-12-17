"use client";

import { useRouter } from "next/navigation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function DessertsPage() {
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
            <h1 className="text-lg font-semibold sm:text-xl">🍰 Десерты</h1>
            <p className="text-[13px] text-white/80 sm:text-sm">
              Небольшие приятные действия как награда после шага или задачки,
              без чувства «я должен».
            </p>
          </header>

          <section className="space-y-2 text-[13px] leading-relaxed text-white/90 sm:text-sm">
            <p>
              Десерты в дофаминовом меню — это не «читмилы» и не побег от
              реальности. Это осознанные, тёплые удовольствия, которые
              поддерживают ресурс после маленького шага, а не заменяют его.
            </p>
            <p>
              Хороший десерт не разрушает базу: сон, здоровье, деньги,
              отношения. Он добавляет ощущение жизни и интереса, а не запускает
              бесконтрольный цикл прокрастинации.
            </p>
            <p>
              Примеры десертов: творческая мелочь «без цели», любимая музыка,
              эпизод сериала после выполненной задачи, маленький ритуал
              удовольствия, который ты выбираешь осознанно.
            </p>
            <p className="text-white/70">
              Принцип: сначала шаг, потом десерт. Тогда удовольствие поддерживает
              движение, а не подменяет его.
            </p>
          </section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

