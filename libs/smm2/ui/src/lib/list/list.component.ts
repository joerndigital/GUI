import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface ListItem {
  id: number,
  icon: IconDefinition,
  label: string | number,
  type?: 'string' | 'number' | 'time',
};

@Component({
  selector: 'smm2-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Smm2ListComponent {

  private _items: ListItem[] = []
  @Input() set items(_items: ListItem[]) {
    this._items = _items;
  }

  get items(): ListItem[] {
    return this._items;
  }
}
