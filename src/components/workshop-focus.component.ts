import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-workshop-focus',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-24 pt-20 -mt-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-[#7E6E94] mb-4">Enfoque del Workshop</h2>
        <p class="text-xl text-gray-500 font-light text-balance max-w-2xl mx-auto">De la comprensión estratégica a la ejecución real</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Block 1 -->
        <div class="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl relative overflow-hidden group">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#F4EB33]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          
          <div class="flex items-center gap-4 mb-8">
            <span class="text-5xl font-black text-[#F4EB33]">1️⃣</span>
            <div>
              <h3 class="text-2xl font-bold text-gray-800">Introducción a IA</h3>
              <p class="text-[#7E6E94] font-semibold">Aplicada a operaciones</p>
            </div>
          </div>

          <p class="text-gray-600 mb-6 font-light">Alineamos criterio antes de construir. Trabajamos una base conceptual clara sobre:</p>
          
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#7E6E94] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="text-sm text-gray-600">Qué es IA y cómo impacta los procesos</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#7E6E94] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="text-sm text-gray-600">Diferencia entre automatizaciones tradicionales y agentes autónomos</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#7E6E94] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="text-sm text-gray-600">Cómo identificar oportunidades de alto impacto</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#7E6E94] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="text-sm text-gray-600">Casos de uso transversales por sector</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#7E6E94] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="text-sm text-gray-600">Cómo rediseñar procesos pensando en automatización</span>
            </li>
          </ul>

          <div class="mt-8 p-4 bg-[#F4EB33]/5 rounded-2xl border border-[#F4EB33]/20">
            <p class="text-sm text-gray-700 italic font-light">
              "El objetivo es que el equipo entienda dónde genera valor la IA y cómo pensar soluciones escalables."
            </p>
          </div>
        </div>

        <!-- Block 2 -->
        <div class="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl relative overflow-hidden group">
          <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-[#F4EB33]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          
          <div class="flex items-center gap-4 mb-8">
            <span class="text-5xl font-black text-[#F4EB33]">2️⃣</span>
            <div>
              <h3 class="text-2xl font-bold text-gray-800">Full Hands-On</h3>
              <p class="text-[#7E6E94] font-semibold">Ejecución práctica con n8n</p>
            </div>
          </div>

          <p class="text-gray-600 mb-6 font-light">La segunda parte es 100% práctica. Dividimos a los participantes en equipos y trabajamos en casos reales.</p>
          
          <div class="space-y-4 mb-8">
            <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p class="text-sm text-gray-600">Cada equipo desarrolla su automatización y presenta:</p>
              <ul class="mt-3 grid grid-cols-2 gap-2 text-xs">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div> <span class="text-gray-600">Problema abordado</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div> <span class="text-gray-600">Solución diseñada</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div> <span class="text-gray-600">Flujo construido</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></div> <span class="text-gray-600">Resultado en vivo</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 p-4 bg-[#F4EB33]/5 rounded-2xl border border-[#F4EB33]/20">
            <p class="text-sm text-gray-700 italic font-light">
              "El objetivo es terminar el workshop mostrando resultados concretos y aplicables desde el día siguiente."
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WorkshopFocusComponent {
  id = input<string>('');
}
