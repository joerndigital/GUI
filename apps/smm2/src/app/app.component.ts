import { Component } from '@angular/core';
import { faClock, faHeart, faShoePrints, faTag } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@gui/smm2/ui';

@Component({
  selector: 'gui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smm2';

  listItems: ListItem[] = [{
    id: 0,
    type: 'number',
    icon: faHeart,
    label: 4,
  }, {
    id: 1,
    type: 'number',
    icon: faShoePrints,
    label: 35,
  }, {
    id: 2,
    icon: faTag,
    label: 'Puzzle-solving',
  }, {
    id: 3,
    icon: faTag,
    label: 'Short and Sweet',
  }, {
    id: 4,
    icon: faClock,
    label: '00:08.444',
  }]
}
