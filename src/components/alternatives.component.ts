import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-alternatives',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 py-12 pt-20 -mt-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#7E6E94] mb-4">Alternativas de Implementación</h2>
        <p class="text-xl text-gray-500 font-light">Dos caminos para transformar sus datos</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Option 1 -->
        <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
           <div class="absolute top-0 right-0 bg-[#F4EB33] text-[#7E6E94] text-xs font-bold px-3 py-1 rounded-bl-xl">ÁGIL</div>
           <div class="mb-6">
             <div class="w-12 h-12 bg-[#F4EB33]/20 rounded-full flex items-center justify-center text-[#7E6E94] mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
             </div>
             <h3 class="text-2xl font-bold text-gray-800">Opción 1: Agile Sheets</h3>
             <p class="text-sm text-gray-400 font-mono mt-1">Google Sheets + Looker Studio</p>
           </div>
           
           <p class="text-gray-600 leading-relaxed mb-6">
             Solución ágil y más económica, centralizando la data en hojas de cálculo, con dashboards en Looker Studio y opción de IA. Ideal para despliegues rápidos y presupuestos ajustados.
           </p>

           <ul class="space-y-2 text-sm text-gray-500 mb-8">
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></span>
               Centralización en Sheets
             </li>
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></span>
               Integración Zoho CRM
             </li>
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#F4EB33]"></span>
               Conectores de Ads
             </li>
           </ul>
        </div>

        <!-- Option 2 -->
        <div class="bg-[#7E6E94] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
           <div class="absolute top-0 right-0 bg-[#D8B4E2] text-[#7E6E94] text-xs font-bold px-3 py-1 rounded-bl-xl">ROBUSTO</div>
           <!-- Decorative circles -->
           <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

           <div class="mb-6 relative z-10">
             <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
             <h3 class="text-2xl font-bold">Opción 2: Cloud Data Warehouse</h3>
             <p class="text-sm text-[#D8B4E2] font-mono mt-1">Google BigQuery + Looker</p>
           </div>
           
           <p class="text-gray-100 leading-relaxed mb-6 relative z-10">
             Ecosistema robusto y escalable en BigQuery, con integraciones directas vía APIs y posibilidad de IA conversacional avanzada. Diseñado para alto volumen y escalabilidad.
           </p>

           <ul class="space-y-2 text-gray-200 text-sm mb-8 relative z-10">
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D8B4E2]"></span>
               BigQuery Data Warehouse
             </li>
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D8B4E2]"></span>
               APIs Directas
             </li>
             <li class="flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D8B4E2]"></span>
               Arquitectura Escalable
             </li>
           </ul>
        </div>
      </div>
    </section>
  `
})
export class AlternativesComponent {
  id = input<string>('');
}