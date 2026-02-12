import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-business-impact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-24 pt-20 -mt-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-[#7E6E94] mb-4">Solución: AI for Marketing</h2>
        <p class="text-xl text-gray-500 font-light">Activando el poder del stack de Google para transformar su operación</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Agents AI -->
        <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-[#7E6E94]/10 rounded-2xl flex items-center justify-center mb-6 text-[#7E6E94]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Agents AI</h3>
          <p class="text-gray-600 text-sm font-light leading-relaxed">
            Despliegue de agentes autónomos para optimización de campañas y monitoreo de KPIs en tiempo real.
          </p>
        </div>

        <!-- Google Workspace -->
        <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-[#F4EB33]/10 rounded-2xl flex items-center justify-center mb-6 text-[#7E6E94]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" /></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Google Workspace</h3>
          <p class="text-gray-600 text-sm font-light leading-relaxed">
            Automatizaciones inteligentes en Sheets, Gmail y Drive para agilizar procesos internos.
          </p>
        </div>

        <!-- Google Cloud -->
        <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-[#E0FCF2]/50 rounded-2xl flex items-center justify-center mb-6 text-[#7E6E94]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Google Cloud</h3>
          <p class="text-gray-600 text-sm font-light leading-relaxed">
            BigQuery, Cloud Functions y Vertex AI como columna vertebral escalable para su negocio.
          </p>
        </div>

        <!-- Reporting & Tracking -->
        <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-[#D8B4E2]/20 rounded-2xl flex items-center justify-center mb-6 text-[#7E6E94]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Reporting & Tracking</h3>
          <p class="text-gray-600 text-sm font-light leading-relaxed">
            Sistemas de medición automatizados para entender el impacto real del marketing.
          </p>
        </div>
      </div>
    </section>
  `
})
export class BusinessImpactComponent {
  id = input<string>('');
}