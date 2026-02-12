import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-deliverables',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-20 pt-20 -mt-20">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-black mb-4">Tareas y Entregables</h2>
        <p class="text-gray-500 font-light text-lg">Cronograma estimado a Corto/Mediano Plazo</p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center mb-8">
        <div class="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
          <button 
            (click)="activeTab.set('option1')"
            [class]="activeTab() === 'option1' 
              ? 'bg-[#7E6E94] text-white shadow-md' 
              : 'text-gray-500 hover:text-gray-800'"
            class="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200">
            Opción 1: Agile Warehouse
          </button>
          <button 
            (click)="activeTab.set('option2')"
            [class]="activeTab() === 'option2' 
              ? 'bg-[#7E6E94] text-white shadow-md' 
              : 'text-gray-500 hover:text-gray-800'"
            class="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200">
            Opción 2: Cloud Warehouse
          </button>
        </div>
      </div>

      <!-- Table Container -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <th class="p-6">Tarea</th>
                <th class="p-6">Objetivo</th>
                <th class="p-6">Responsable</th>
                <th class="p-6 text-center">Fase</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              @if (activeTab() === 'option1') {
                @for (item of option1Data; track item.task) {
                  <tr class="hover:bg-[#FCF9F7] transition-colors">
                    <td class="p-6 font-medium text-gray-800">{{ item.task }}</td>
                    <td class="p-6 text-gray-600 text-sm">{{ item.objective }}</td>
                    <td class="p-6 text-gray-500 text-sm">
                      <span class="inline-block px-2 py-1 bg-gray-100 rounded text-xs">{{ item.owner }}</span>
                    </td>
                    <td class="p-6 text-center">
                      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F4EB33]/20 text-[#7E6E94] text-xs font-bold">{{ item.phase }}</span>
                    </td>
                  </tr>
                }
              } @else {
                @for (item of option2Data; track item.task) {
                  <tr class="hover:bg-[#FCF9F7] transition-colors">
                    <td class="p-6 font-medium text-gray-800">{{ item.task }}</td>
                    <td class="p-6 text-gray-600 text-sm">{{ item.objective }}</td>
                    <td class="p-6 text-gray-500 text-sm">
                      <span class="inline-block px-2 py-1 bg-gray-100 rounded text-xs">{{ item.owner }}</span>
                    </td>
                    <td class="p-6 text-center">
                      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D8B4E2]/20 text-[#7E6E94] text-xs font-bold">{{ item.phase }}</span>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
        
        <!-- Footer Summary -->
        <div class="bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-center sm:justify-start items-center text-sm text-gray-500 gap-4">
          <span>* Estimaciones aproximadas sujetas a revisión técnica final.</span>
        </div>
      </div>

    </section>
  `
})
export class TasksDeliverablesComponent {
  id = input<string>('');
  activeTab = signal<'option1' | 'option2'>('option1');

  option1Data = [
    { task: 'Setup Sheets Centralizadas', objective: 'Simplificar arquitectura', owner: 'Data Engineer', phase: 'F1' },
    { task: 'Integración Zoho CRM → Sheets', objective: 'Sincronizar datos de CRM', owner: 'Integration Specialist', phase: 'F1' },
    { task: 'Integración Ads → Sheets', objective: 'Unificar datos de campañas', owner: 'Integration Specialist', phase: 'F1' },
    { task: 'Dashboards Ejecutivos en Looker', objective: 'Visualización ágil', owner: 'BI Specialist', phase: 'F2' },
    { task: 'Reportes Automáticos', objective: 'Seguimiento simple', owner: 'BI Specialist', phase: 'F2' },
    { task: 'Agente Conversacional de IA', objective: 'Consultas en lenguaje natural', owner: 'AI Engineer', phase: 'F3' },
  ];

  option2Data = [
    { task: 'Setup Data Warehouse en GCP', objective: 'Centralizar datos', owner: 'Data Engineer', phase: 'F1' },
    { task: 'Integración Zoho CRM', objective: 'Sincronizar datos de CRM', owner: 'Integration Specialist', phase: 'F1' },
    { task: 'Integración Redes (Meta, TikTok)', objective: 'Unificar datos de campañas', owner: 'Integration Specialist', phase: 'F1' },
    { task: 'Dashboards Ejecutivos en Looker', objective: 'Toma de decisiones ágil', owner: 'BI Specialist', phase: 'F2' },
    { task: 'Reportes Automáticos', objective: 'Control interno', owner: 'BI Specialist', phase: 'F2' },
    { task: 'Agente Conversacional de IA', objective: 'Consultas en lenguaje natural', owner: 'AI Engineer', phase: 'F3' },
  ];
}