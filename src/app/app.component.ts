import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaincontentareaComponent } from './maincontentarea/maincontentarea.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaincontentareaComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}


