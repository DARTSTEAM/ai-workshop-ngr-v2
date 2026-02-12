import { Component, ChangeDetectionStrategy, signal, inject, input } from '@angular/core';
import { GoogleGenAI } from '@google/genai';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id()'
  },
  template: `
    <section class="container mx-auto px-6 mb-20 pt-20 -mt-20">
      <div class="bg-gradient-to-br from-[#7E6E94] to-[#4a4059] rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden relative">
        <!-- Abstract Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#F4EB33] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#D8B4E2] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Explanation -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold mb-6">
              <span class="w-2 h-2 rounded-full bg-[#F4EB33] animate-pulse"></span>
              LIVE DEMO
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">Conversa con tu Propuesta</h2>
            <p class="text-gray-300 font-light mb-8 leading-relaxed">
              Esta es una demostración real de la tecnología que implementaremos. 
              El siguiente chat es un agente de IA entrenado con el contenido de esta propuesta. 
              ¡Pregúntale sobre los beneficios, tiempos o entregables!
            </p>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-[#F4EB33] text-sm uppercase tracking-wide">Preguntas sugeridas:</h4>
              <div class="flex flex-wrap gap-2">
                <button (click)="setQuestion('¿Cuál es el precio de la Opción 2?')" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-colors text-left">
                  ¿Cuál es el precio de la Opción 2?
                </button>
                <button (click)="setQuestion('¿Qué tecnologías usan?')" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-colors text-left">
                  ¿Qué tecnologías usan?
                </button>
                <button (click)="setQuestion('¿Cuánto tarda la implementación?')" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-colors text-left">
                  ¿Cuánto tarda la implementación?
                </button>
              </div>
            </div>
          </div>

          <!-- Chat Interface -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-gray-800 flex flex-col h-[500px] shadow-xl">
            <!-- Messages Area -->
            <div class="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
              @for (msg of messages(); track $index) {
                <div [class]="'flex ' + (msg.role === 'user' ? 'justify-end' : 'justify-start')">
                  <div [class]="'max-w-[85%] p-4 rounded-2xl text-sm ' + 
                    (msg.role === 'user' 
                      ? 'bg-[#7E6E94] text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none')">
                    <p>{{ msg.text }}</p>
                  </div>
                </div>
              }
              @if (isLoading()) {
                <div class="flex justify-start">
                  <div class="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-2 items-center">
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              }
            </div>

            <!-- Input Area -->
            <div class="relative">
              <input 
                [(ngModel)]="currentInput" 
                (keydown.enter)="sendMessage()"
                type="text" 
                placeholder="Escribe tu pregunta sobre la propuesta..." 
                class="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#7E6E94] transition-all"
                [disabled]="isLoading()"
              >
              <button 
                (click)="sendMessage()"
                [disabled]="isLoading() || !currentInput()"
                class="absolute right-2 top-2 p-2 bg-[#7E6E94] text-white rounded-lg hover:bg-[#685a7d] disabled:opacity-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,0.1);
      border-radius: 20px;
    }
  `]
})
export class AiDemoComponent {
  id = input<string>('');
  currentInput = signal('');
  isLoading = signal(false);
  messages = signal<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hola, soy el agente IA de Hike. ¿En qué puedo ayudarte sobre esta propuesta para KOA?' }
  ]);

  systemPrompt = `
    Eres un asistente comercial de Hike (hike the cloud). Estás presentando una propuesta comercial al cliente KOA.
    
    INFORMACIÓN CLAVE DE LA PROPUESTA:
    
    1. OPCIONES DE INVERSIÓN (PRICING):
       - Opción 1 (Agile Warehouse): USD 4.000 (Pago único). Incluye dashboards en Looker/Sheets, integración CRM + Ads.
       - Opción 2 (Cloud Warehouse - RECOMENDADA): USD 7.000 (Pago único). Incluye infraestructura BigQuery, integraciones Full (Meta, TikTok, LinkedIn, CRM).
       - Add-on Agente IA: USD 2.200 (Pago único).
       - Mantenimiento: A cotizar (mensual).

    2. FASES DE IMPLEMENTACIÓN:
       - Fase 1 (Infraestructura): 1-3 semanas.
       - Fase 2 (Visualización): 1-2 semanas.
       - Fase 3 (Inteligencia): 1 semana.

    3. STACK TECNOLÓGICO:
       - Google Cloud (BigQuery, Functions, Scheduler).
       - Zoho CRM (OAuth2, API v2/v4).
       - Analytics (Looker Studio).
       - IA (Vertex AI, Hike AI Agents).

    4. IMPACTO:
       - Ahorro >20 horas/semana.
       - Reducción errores 95%.

    TONO: Profesional, seguro, experto en datos. Responde de forma concisa.
  `;

  setQuestion(text: string) {
    this.currentInput.set(text);
    this.sendMessage();
  }

  async sendMessage() {
    const text = this.currentInput();
    if (!text.trim() || this.isLoading()) return;

    this.messages.update(msgs => [...msgs, { role: 'user', text }]);
    this.currentInput.set('');
    this.isLoading.set(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] });
      const model = ai.getGenerativeModel({ 
        model: 'gemini-2.5-flash',
        systemInstruction: this.systemPrompt
      });

      const history = this.messages().map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const chat = model.startChat({
        history: history.slice(0, -1)
      });

      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      this.messages.update(msgs => [...msgs, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
      this.messages.update(msgs => [...msgs, { role: 'model', text: 'Lo siento, hubo un error conectando con la IA. Por favor intenta de nuevo.' }]);
    } finally {
      this.isLoading.set(false);
    }
  }
}