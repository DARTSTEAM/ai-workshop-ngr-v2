import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="bg-[#FCF9F7] py-20 border-y border-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-black mb-16">Stack Tecnológico</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Cloud Infra -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-3">Google Cloud</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> BigQuery
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Cloud Functions
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Cloud Scheduler
              </li>
            </ul>
          </div>

          <!-- Zoho CRM -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-4 text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-3">Integración Zoho</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> OAuth2 Server-based
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> REST API v2/v4
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Rate Limit Mgmt
              </li>
            </ul>
          </div>

          <!-- Analytics -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-3">Analytics & BI</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Looker Studio
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Custom APIs
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Real-Time Sync
              </li>
            </ul>
          </div>

          <!-- AI -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-3">Inteligencia Artificial</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Hike AI Agents
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> Vertex AI
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">✓</span> NLP
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class TechStackComponent {
  id = input<string>('');
}