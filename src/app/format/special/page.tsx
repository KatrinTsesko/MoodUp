"use client";

import { useRouter } from "next/navigation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function SpecialPage() {
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
            <h1 className="text-lg font-semibold sm:text-xl">⭐ Особые блюда</h1>
            <p className="text-[13px] text-white/80 sm:text-sm">
              Редкие, более объёмные события, которые требуют подготовки и
              запоминаются как маркеры заботы о себе.
            </p>
          </header>

          <section className="space-y-2 text-[13px] leading-relaxed text-white/90 sm:text-sm">
            <p>
              Особые блюда — это не на каждый день. Это выезды на природу,
              день без задач, посещение специалиста, встреча, которую давно
              хотелось устроить. Они требуют времени и энергии, но при этом
              дают заметный сдвиг в качестве жизни.
            </p>
            <p>
              Важно относиться к особым блюдам бережно: не тянуть их из
              состояния «на нуле», а планировать тогда, когда тело и психика
              могут выдержать дополнительную нагрузку и впечатления.
            </p>
            <p>
              Часто особые блюда становятся точками опоры в памяти: «тот день,
              когда я позволил себе отдых», «поездка, после которой стало чуть
              спокойнее», «долгожданный разговор в безопасном формате».
            </p>
            <p className="text-white/70">
              Принцип: особые блюда не обязаны происходить часто. Важнее, чтобы
              они были осознанным выбором, а не попыткой разом закрыть все
              потребности.
            </p>
          </section>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

