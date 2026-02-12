import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { ExecutiveSummaryComponent } from './components/executive-summary.component';
import { BusinessImpactComponent } from './components/business-impact.component';
import { ImplementationPhasesComponent } from './components/implementation-phases.component';
import { WorkshopFocusComponent } from './components/workshop-focus.component';
import { PricingComponent } from './components/pricing.component';
import { FooterComponent } from './components/footer.component';
import { SideNavComponent } from './components/side-nav.component';
import { NextStepsComponent } from './components/next-steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    ExecutiveSummaryComponent,
    BusinessImpactComponent,
    ImplementationPhasesComponent,
    WorkshopFocusComponent,
    PricingComponent,
    FooterComponent,
    SideNavComponent,
    NextStepsComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }