import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <header class="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#FCF9F7]">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-2/3 h-full bg-[#E0C3FC] opacity-10 rounded-bl-[200px]"></div>
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#F4EB33] opacity-5 rounded-tr-[100px]"></div>

      <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-left space-y-6">
          <div class="inline-block px-4 py-1 rounded-full border border-[#7E6E94] text-[#7E6E94] text-sm font-semibold tracking-wider uppercase mb-4">
            Propuesta Comercial
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold text-[#000000] leading-tight mt-0">
            AI Workshop <br><span class="hike-gradient-text">Hike Ecosystem</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-lg font-light">
            Diseñando el futuro del marketing con automatización avanzada y agentes autónomos.
          </p>
        </div>

        <!-- Logo/Card Image Section -->
        <div class="hidden lg:flex justify-center items-center relative">
          <!-- Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#7E6E94] to-[#D8B4E2] rounded-full opacity-20 blur-3xl"></div>
          
          <!-- Card Container -->
          <div class="relative bg-white p-12 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-lg flex items-center justify-center min-h-[350px]">
             <img 
               src="https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-for-sustainable-management/2024/ngr/logo.png" 
               alt="NGR Logo" 
               class="w-full h-auto object-contain max-h-[300px]"
             />
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  id = input<string>('');
}