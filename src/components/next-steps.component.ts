import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-next-steps',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-24 pt-20 -mt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Left Column: Steps -->
        <div>
          <h2 class="text-3xl font-bold text-[#7E6E94] mb-8">Próximos Pasos</h2>
          
          <div class="space-y-8 relative">
            <!-- Connector Line -->
            <div class="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>

            <!-- Step 1 -->
            <div class="relative flex items-start gap-6 group">
              <div class="w-8 h-8 rounded-full bg-[#7E6E94] border-4 border-white shadow-md flex-shrink-0 z-10"></div>
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full group-hover:shadow-md transition-shadow">
                <h3 class="font-bold text-gray-800 text-lg mb-2">Plataformas y Accesos</h3>
                <p class="text-gray-600 font-light">Confirmar plataforma colaborativa (Teams/Slack) y gestionar accesos técnicos.</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative flex items-start gap-6 group">
              <div class="w-8 h-8 rounded-full bg-[#D8B4E2] border-4 border-white shadow-md flex-shrink-0 z-10"></div>
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full group-hover:shadow-md transition-shadow">
                <h3 class="font-bold text-gray-800 text-lg mb-2">Pre-work</h3>
                <p class="text-gray-600 font-light mb-4">Completar la hoja de selección de ideas para priorizar los casos de uso del workshop.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative flex items-start gap-6 group">
              <div class="w-8 h-8 rounded-full bg-[#F4EB33] border-4 border-white shadow-md flex-shrink-0 z-10"></div>
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full group-hover:shadow-md transition-shadow">
                <h3 class="font-bold text-gray-800 text-lg mb-2">Lanzamiento</h3>
                <p class="text-gray-600 font-light">Aprobación de presupuesto y definición de fechas para la ejecución.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact -->
        <div>
          <h2 class="text-3xl font-bold text-[#7E6E94] mb-8">Contacto Comercial</h2>
          
          <div class="bg-gradient-to-br from-[#7E6E94] to-[#4a4059] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <!-- Decor -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#F4EB33] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
            
            <p class="text-lg font-light mb-8 opacity-90">
              Estamos listos para diseñar el futuro de su ecosistema de marketing.
            </p>

            <div class="space-y-6">
              <!-- Contact 1 -->
              <div class="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <div class="w-12 h-12 rounded-full bg-[#F4EB33] flex items-center justify-center text-[#7E6E94] font-bold text-xl text-center">
                  JP
                </div>
                <div>
                  <h4 class="font-bold text-lg">Juan Pablo</h4>
                  <a href="mailto:juanpablo@hikethecloud.com" class="text-gray-300 hover:text-white transition-colors text-sm">juanpablo@hikethecloud.com</a>
                </div>
              </div>

              <!-- Contact 2 -->
              <div class="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <div class="w-12 h-12 rounded-full bg-[#D8B4E2] flex items-center justify-center text-[#7E6E94] font-bold text-xl text-center">
                  SG
                </div>
                <div>
                  <h4 class="font-bold text-lg">Santiago Giovanneti</h4>
                  <a href="mailto:santiago@hikethecloud.com" class="text-gray-300 hover:text-white transition-colors text-sm">santiago@hikethecloud.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class NextStepsComponent {
  id = input<string>('');
}