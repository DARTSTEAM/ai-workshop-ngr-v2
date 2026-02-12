import { Component, ChangeDetectionStrategy, signal, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-2 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-2xl min-w-[240px]">
      
      <!-- Hike Logo Header -->
      <div class="mb-4 px-4 pt-2 pb-2 border-b border-gray-100 flex justify-center">
         <div class="flex items-center gap-1 select-none">
           <span class="font-extrabold text-2xl text-[#7E6E94] tracking-tight">hike</span>
           <span class="text-gray-400 font-light text-lg">the cloud.</span>
         </div>
      </div>
      
      @for (item of navItems; track item.id) {
        <button 
          (click)="scrollTo(item.id)"
          class="group w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 text-left"
          [class.bg-[#7E6E94]]="activeSection() === item.id"
          [class.text-white]="activeSection() === item.id"
          [class.shadow-md]="activeSection() === item.id"
          [class.text-gray-500]="activeSection() !== item.id"
          [class.hover:bg-gray-50]="activeSection() !== item.id"
          [class.hover:text-[#7E6E94]]="activeSection() !== item.id"
        >
          <!-- Icon -->
          <span [innerHTML]="item.safeIcon" class="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110"></span>

          <!-- Label -->
          <span>{{ item.label }}</span>

          <!-- Active Indicator Arrow -->
          @if (activeSection() === item.id) {
            <span class="ml-auto opacity-50">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </span>
          }
        </button>
      }
    </nav>
  `
})
export class SideNavComponent implements AfterViewInit, OnDestroy {
  private sanitizer = inject(DomSanitizer);
  private document = inject(DOCUMENT);

  activeSection = signal<string>('home');
  private observer: IntersectionObserver | null = null;

  private rawItems = [
    { id: 'home', label: 'Inicio', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>' },
    { id: 'summary', label: 'Contexto', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>' },
    { id: 'impact', label: 'Solución', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>' },
    { id: 'phases', label: 'Metodología', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>' },
    { id: 'focus', label: 'Enfoque', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>' },
    { id: 'pricing', label: 'Workshop', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>' },
    { id: 'next-steps', label: 'Pasos', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>' },
  ];

  navItems: { id: string, label: string, safeIcon: SafeHtml }[] = this.rawItems.map(item => ({
    id: item.id,
    label: item.label,
    safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
  }));

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    this.navItems.forEach(item => {
      const element = this.document.getElementById(item.id);
      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(id: string) {
    this.activeSection.set(id);
    const element = this.document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}