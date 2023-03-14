import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpaghettiMonsterFlying, faWrench, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smm2-sidenav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Smm2SidenavComponent {
  faWrench = faWrench;
  faXmark = faXmark;
  faSpaghetti = faSpaghettiMonsterFlying;
}
