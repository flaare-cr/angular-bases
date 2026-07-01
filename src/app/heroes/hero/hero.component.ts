import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeroComponent {
  public name:  string = 'iron man';
  public age:   number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'batman';
  }

  changeAge(): void {
    this.age = 34;
  }

  resetForm(): void {
    this.name = 'iron man';
    this.age = 45;
  }

}
