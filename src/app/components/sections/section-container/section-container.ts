import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  imports: [],
  templateUrl: './section-container.html',
  styleUrl: './section-container.css',
})
export class SectionContainer {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() btn_label: string = '';
}
