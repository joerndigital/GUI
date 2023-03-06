import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpaghettiMonsterFlying, faXmark, faWrench, faSignsPost, faUser, faFlagCheckered, faHeart, faShoePrints, faTag, faClock } from '@fortawesome/free-solid-svg-icons';
import { Smm2TimestampDirective } from '../timestamp/timestamp.directive';
import { ListItem, Smm2ListComponent } from '../list/list.component';


// https://youtu.be/Wr55JbP80LE?t=39

@Component({
  selector: 'smm2-pause-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Smm2TimestampDirective, Smm2ListComponent],
  templateUrl: './pause-menu.component.html',
  styleUrls: ['./pause-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Smm2PauseMenuComponent {
  @Input() title = 'Level Name';
  @Input() description = '';
  @Input() clears = 0;

  @Input() user = 'Username';
  @Input() clearCondition = 'No clear condition set.';

  faClock = faClock;
  faFlagCheckered = faFlagCheckered;
  faHeart = faHeart;
  faShoePrints = faShoePrints;
  faSignsPost = faSignsPost;
  faSpaghetti = faSpaghettiMonsterFlying;
  faTag = faTag;
  faUser = faUser;
  faWrench = faWrench;
  faXmark = faXmark;

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
