import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpaghettiMonsterFlying, faXmark, faWrench, faSignsPost, faUser, faFlagCheckered, faHeart, faShoePrints, faTag, faTimes, faClock } from '@fortawesome/free-solid-svg-icons';


// https://youtu.be/Wr55JbP80LE?t=39

@Component({
  selector: 'smm2-pause-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pause-menu.component.html',
  styleUrls: ['./pause-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Smm2PauseMenuComponent {
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
}
