import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-24 pt-20 -mt-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-[#7E6E94] mb-4">AI Workshop Intensivo</h2>
        <p class="text-xl text-gray-500 font-light">De la operación a la creación del futuro</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 text-center items-stretch">
        
        <!-- Option 1: Media Jornada -->
        <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-800">Media Jornada</h3>
            <p class="text-[#7E6E94] font-semibold">Teórica (4h)</p>
          </div>
          <p class="text-sm text-gray-500 mb-6 flex-grow">
            Introducción estratégica para entender qué es posible y cómo impactar el área sin fricción.
          </p>
          <ul class="space-y-3 mb-8 text-sm text-gray-600 text-left mx-auto">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Visión estratégica de IA
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Casos de éxito sectoriales
            </li>
          </ul>
        </div>

        <!-- Option 2: Jornada Completa (Recommended/Main) -->
        <div class="bg-[#7E6E94] text-white rounded-3xl p-8 border border-[#7E6E94] shadow-xl relative transform lg:-translate-y-4 flex flex-col">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F4EB33] text-[#7E6E94] text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
            RECOMENDADO
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-bold">Jornada Completa</h3>
            <p class="text-[#D8B4E2] font-semibold">Estratégica + Técnica (8h)</p>
            <div class="mt-4 flex items-baseline gap-1 justify-center">
              <span class="text-4xl font-black text-[#F4EB33]">USD 6.500</span>
            </div>
          </div>
          <p class="text-sm text-gray-100 mb-6 font-light">
            Visión 360°, casos de uso y fundamentos técnicos para diseñar y operar automatizaciones.
          </p>
          <ul class="space-y-3 mb-8 text-sm text-gray-100 text-left mx-auto">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              90% con agente funcional
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Publicación en producción
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Banco de agentes plug & play
            </li>
          </ul>
        </div>

        <!-- Option 3: Formación Avanzada -->
        <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-800">Formación Avanzada</h3>
            <p class="text-[#7E6E94] font-semibold">Intensivo (12h)</p>
          </div>
          <p class="text-sm text-gray-500 mb-6 flex-grow">
            Profundización en implementación, personalización y escala de agentes complejos.
          </p>
          <ul class="space-y-3 mb-8 text-sm text-gray-600 text-left mx-auto">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Arquitecturas complejas
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div>
              Custom tools & APIs
            </li>
          </ul>
        </div>

      </div>

      <!-- Deliverables Section -->
      <div class="bg-gradient-to-br from-[#FCF9F7] to-[#F1F5F9] rounded-3xl p-10 border border-gray-100">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-[#7E6E94] mb-6 text-left">¿Qué te llevas?</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                <strong class="block text-gray-800 mb-1">Playbook</strong>
                Guía de implementación técnica.
              </div>
              <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                <strong class="block text-gray-800 mb-1">Banco de Agentes</strong>
                Archivos .json listos para usar.
              </div>
              <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                <strong class="block text-gray-800 mb-1">Matriz de Casos</strong>
                Hoja de ruta priorizada.
              </div>
              <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                <strong class="block text-gray-800 mb-1">Soporte 30 días</strong>
                Acompañamiento post-workshop.
              </div>
            </div>
          </div>
          <div class="md:w-1/2 bg-white/50 p-6 rounded-2xl flex items-center justify-center border border-white">
            <div class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-[#F4EB33]/20 rounded-2xl flex items-center justify-center text-[#7E6E94]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-600 font-light italic">"El 90% de los participantes termina con un agente funcional listo para usar."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {
  id = input<string>('');
}