import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-executive-summary',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 pt-20 -mt-20">
      <div class="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
        <!-- Decorative accent line -->
        <div class="absolute left-0 top-10 w-2 h-20 bg-[#F4EB33]"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5">
            <h2 class="text-3xl font-bold text-[#7E6E94] mb-6">Contexto y Visión</h2>
            <p class="text-4xl font-extralight text-black leading-snug">
              Eliminar el <strong class="font-extrabold text-[#7E6E94]">trade-off</strong> entre alto rendimiento y tiempo.
            </p>
          </div>
          
          <div class="lg:col-span-7 flex flex-col justify-center space-y-6 text-gray-600 text-lg leading-relaxed font-light">
            <p>
              En un entorno donde el marketing ha evolucionado rápidamente pero las operaciones se han quedado atrás, 
              <strong class="font-semibold text-black">Hike</strong> propone un cambio de paradigma. 
              Nuestro enfoque es diseñar, automatizar y operar sistemas de alto desempeño para lograr más resultados en menos tiempo.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span class="block font-bold text-[#7E6E94]">ABN Digital</span>
                <span class="text-sm text-gray-500">Medios y analítica</span>
              </div>
              <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span class="block font-bold text-[#7E6E94]">Detrics</span>
                <span class="text-sm text-gray-500">Recolección de datos</span>
              </div>
              <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span class="block font-bold text-[#7E6E94]">Hike</span>
                <span class="text-sm text-gray-500">Estrategia y automatización</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExecutiveSummaryComponent {
  id = input<string>('');
}