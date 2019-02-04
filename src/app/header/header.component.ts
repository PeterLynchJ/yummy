import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConnectableObservable, from, of, Subject} from 'rxjs';
import {multicast} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  title = 'Yummy';
  onSelect (feature: string) {
    this.featureSelected.emit(feature);
  }

  ngOnInit() {
    /*const mySub = new Subject<number>();
    mySub.subscribe((data) => {
      console.log(data);
    });
    mySub.subscribe((data) => {
      console.log('sub2: ', data);
    });
    const source = of(1, 2, 3, 4);
    const start = source.pipe<number>(multicast(mySub)) as ConnectableObservable<number>;
    start.connect();*/

  }
}
