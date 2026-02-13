import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-white border-t border-gray-100 py-12">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
           <span class="font-extrabold text-2xl text-[#7E6E94]">hike</span>
           <span class="text-gray-400 font-light text-xl">the cloud.</span>
        </div>
        
        <div class="text-sm text-gray-500 text-center md:text-right">
          <p>© 2026 Hike. Propuesta confidencial.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent { }