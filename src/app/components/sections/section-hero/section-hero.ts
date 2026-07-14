import { Component, Input } from '@angular/core';
import { Button } from '../../buttons/button/button';

@Component({
  selector: 'app-section-hero',
  imports: [Button],
  templateUrl: './section-hero.html',
  styleUrl: './section-hero.css',
})
export class SectionHero {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() btn_label: string = '';
}
