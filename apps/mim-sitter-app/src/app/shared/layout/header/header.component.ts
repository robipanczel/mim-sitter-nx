import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mim-sitter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    console.log('HeaderComponent initialized');
  }
}
