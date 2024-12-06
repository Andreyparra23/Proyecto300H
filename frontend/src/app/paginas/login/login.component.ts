import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
@Component({
  selector: 'app-login',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
