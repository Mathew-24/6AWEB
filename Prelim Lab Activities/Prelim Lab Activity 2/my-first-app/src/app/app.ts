import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./header/header";
import { Profile } from "./profile/profile";
import { Skills } from "./skills/skills";
import { Profiencies } from "./profiencies/profiencies";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Profile, Skills, Profiencies, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
