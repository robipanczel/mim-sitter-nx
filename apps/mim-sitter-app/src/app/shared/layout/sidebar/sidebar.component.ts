import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mim-sitter-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    console.log('FooterComponent initialized');
  }
}
