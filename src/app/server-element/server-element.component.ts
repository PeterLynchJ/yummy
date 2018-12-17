import {Component, OnInit, Input, OnChanges, ElementRef, ViewChild, AfterViewInit, ContentChild, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngAfterViewInit() {
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log(this.paragraph.nativeElement.textContent);
  }
}
