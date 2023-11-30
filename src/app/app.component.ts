import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics';
  name = 'Luis';
  imgUrl = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }

  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {}
}
