import { Component, OnInit } from '@angular/core';
import { SectionHero } from '../../components/sections/section-hero/section-hero';
import { SectionContainer } from '../../components/sections/section-container/section-container';

@Component({
  selector: 'app-homepage',
  imports: [SectionHero, SectionContainer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
