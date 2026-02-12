import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-implementation-phases',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-24 pt-20 -mt-20">
      <div class="bg-[#FCF9F7] rounded-3xl p-12 border border-gray-100">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold text-[#7E6E94] mb-4">Nuestra Metodología</h2>
          <p class="text-gray-500 font-light">Diseñamos sistemas escalables y eficientes a través de cuatro pilares fundamentales.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Pillar 1 -->
          <div class="relative group">
            <div class="relative bg-white p-8 rounded-2xl h-full flex flex-col border border-gray-100">
              <span class="text-4xl font-black text-gray-100 mb-4">01</span>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Strategy</h3>
              <p class="text-gray-500 text-sm font-light">Definición de la hoja de ruta técnica y de negocio para alinear objetivos.</p>
            </div>
          </div>

          <!-- Pillar 2 (Highlighted) -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#7E6E94] to-[#F4EB33] rounded-2xl blur opacity-30"></div>
            <div class="relative bg-white p-8 rounded-2xl h-full flex flex-col border-2 border-[#F4EB33] shadow-lg">
              <span class="text-4xl font-black text-[#F4EB33] mb-4 opacity-50">02</span>
              <h3 class="text-xl font-bold text-[#7E6E94] mb-3">Training</h3>
              <p class="text-gray-500 text-sm font-semibold">Capacitación de equipos en los nuevos flujos de trabajo habilitados por IA.</p>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="relative group">
            <div class="relative bg-white p-8 rounded-2xl h-full flex flex-col border border-gray-100">
              <span class="text-4xl font-black text-gray-100 mb-4">03</span>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Build</h3>
              <p class="text-gray-500 text-sm font-light">Desarrollo de productos de datos y agentes a medida según la necesidad.</p>
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="relative group">
            <div class="relative bg-white p-8 rounded-2xl h-full flex flex-col border border-gray-100">
              <span class="text-4xl font-black text-gray-100 mb-4">04</span>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Run</h3>
              <p class="text-gray-500 text-sm font-light">Gestión y optimización continua de los sistemas implementados para escala.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ImplementationPhasesComponent {
  id = input<string>('');
}