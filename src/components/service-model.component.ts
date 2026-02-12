import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-service-model',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="bg-white py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <!-- Content Left -->
          <div>
            <h2 class="text-3xl font-bold text-[#7E6E94] mb-6">Modelo de Servicio</h2>
            <p class="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              Este proyecto se plantea como un <strong class="text-black font-semibold">ciclo de implementación integral</strong>, 
              que abarca desde las integraciones iniciales hasta la entrega de dashboards y el agente de IA, 
              con acompañamiento experto en cada fase.
            </p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="mt-1 text-[#F4EB33]">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                </span>
                <span class="text-gray-700">Entregables definidos y cronograma de ejecución.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 text-[#F4EB33]">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                </span>
                <span class="text-gray-700">Acompañamiento de especialistas (Data Engineers, BI Experts, AI Engineers).</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 text-[#F4EB33]">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                </span>
                <span class="text-gray-700">Soporte post-implementación.</span>
              </li>
            </ul>

            <div class="p-6 bg-[#FCF9F7] rounded-xl border border-[#D8B4E2]">
              <h4 class="font-bold text-[#7E6E94] mb-2">Beneficio Clave</h4>
              <p class="text-sm text-gray-600">
                KOA obtiene un ecosistema robusto sin comprometerse a un esquema de recursos dedicados a largo plazo.
              </p>
            </div>
          </div>

          <!-- Graphic Right: Phases -->
          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div class="relative mb-12 pl-24 group">
               <div class="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-[#7E6E94] rounded-full flex items-center justify-center z-10 font-bold text-[#7E6E94] group-hover:bg-[#7E6E94] group-hover:text-white transition-colors">
                 01
               </div>
               <h3 class="text-xl font-bold text-black mb-2">Infraestructura</h3>
               <p class="text-gray-500 text-sm">Integración de fuentes de datos, limpieza y centralización en la nube.</p>
            </div>

            <div class="relative mb-12 pl-24 group">
               <div class="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-[#D8B4E2] rounded-full flex items-center justify-center z-10 font-bold text-[#D8B4E2] group-hover:bg-[#D8B4E2] group-hover:text-white transition-colors">
                 02
               </div>
               <h3 class="text-xl font-bold text-black mb-2">Visualización</h3>
               <p class="text-gray-500 text-sm">Desarrollo de Dashboards en Power BI / Looker para KPIs críticos.</p>
            </div>

            <div class="relative pl-24 group">
               <div class="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-[#F4EB33] rounded-full flex items-center justify-center z-10 font-bold text-black group-hover:bg-[#F4EB33] transition-colors">
                 03
               </div>
               <h3 class="text-xl font-bold text-black mb-2">Inteligencia</h3>
               <p class="text-gray-500 text-sm">Implementación de Agente IA para consultas en lenguaje natural.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  `
})
export class ServiceModelComponent {
  id = input<string>('');
}