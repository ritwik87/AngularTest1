import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  words = 'I am not gonna live forever, but I wanna live while I am alive';
  count = countOccurences(this.words, 'live');
}

function countOccurences(string, word) {
  //return string.split(word).length - 1;
}
