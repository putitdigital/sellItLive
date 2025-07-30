import { Component} from '@angular/core';
import { DiagramModule, SymbolPaletteModule, OverviewModule } from '@syncfusion/ej2-angular-diagrams';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DiagramModule, SymbolPaletteModule, OverviewModule, 
    HomeComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parentData: string = '';
  title = 'homes';
  
  filterResults(text: string) {
    this.parentData = text
    console.log("test :",text);
  }
}