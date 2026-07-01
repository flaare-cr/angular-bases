import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
