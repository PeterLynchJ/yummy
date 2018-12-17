import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostBinding('class.open') isOpen = false;
}
