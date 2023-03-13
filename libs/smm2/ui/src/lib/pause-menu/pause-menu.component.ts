import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpaghettiMonsterFlying, faXmark, faWrench, faSignsPost, faUser, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { Smm2TimestampDirective } from '../timestamp/timestamp.directive';
import { Smm2ListComponent } from '../list/list.component';


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

  faFlagCheckered = faFlagCheckered;
  faSignsPost = faSignsPost;
  faSpaghetti = faSpaghettiMonsterFlying;
  faUser = faUser;
  faWrench = faWrench;
  faXmark = faXmark;
}
