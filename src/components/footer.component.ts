import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-white border-t border-gray-100 py-12">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-3">
           <img src="https://files.slack.com/files-pri/T01Q7LJG952-F0AE67W846N/256.02-03__1_.png?pub_secret=4fad86a427" alt="Hike Logo" class="w-8 h-8 object-contain" />
           <div class="flex items-center gap-1">
             <span class="font-extrabold text-2xl text-[#7E6E94]">hike</span>
             <span class="text-gray-400 font-light text-xl">the cloud.</span>
           </div>
        </div>
        
        <div class="text-sm text-gray-500 text-center md:text-right">
          <p>© 2026 Hike. Propuesta confidencial.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent { }