import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  keyframes,
  style,
} from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

const DEG_90 = 90;
const DEG_180 = 180;
const DEG_270 = 270;

@Directive({
  selector: '[smm2Focus]',
})
export class FocusDirective implements OnDestroy {
  private corners: Set<SVGElement> = new Set();
  private animationPlayers: Set<AnimationPlayer> = new Set();

  private _smm2FocusColor = '#d11a0e';
  @Input() set smm2FocusColor(color: string) {
    this._smm2FocusColor = color;
    this.corners.forEach(corner => {
      this.renderer.setAttribute(corner, 'fill', this._smm2FocusColor);
    })
  }

  @HostListener('pointerover') onPointerEnter(): void {
    this.el.nativeElement.classList.add('hover');
    this.corners.forEach((corner) => {
      this.renderer.appendChild(this.el.nativeElement, corner);
    });
  }

  @HostListener('pointerleave') onPointerLeave(): void {
    this.el.nativeElement.classList.remove('hover');
    this.corners.forEach((corner) => {
      this.renderer.removeChild(this.el.nativeElement, corner);
    });
  }

  @HostListener('focusin') onFocusIn(): void {
    this.el.nativeElement.classList.add('focus');
    this.corners.forEach((corner) => {
      this.renderer.appendChild(this.el.nativeElement, corner);
    });
  }

  @HostListener('focusout') onFocusOut(): void {
    this.el.nativeElement.classList.remove('focus');
    this.corners.forEach((corner) => {
      this.renderer.removeChild(this.el.nativeElement, corner);
    });
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder,
  ) {
    this.el.nativeElement.style.position = 'relative';

    this.corners.add(this.createFocusIndicator('top', 'left', 0));
    this.corners.add(this.createFocusIndicator('top', 'right', DEG_90));
    this.corners.add(this.createFocusIndicator('bottom', 'right', DEG_180));
    this.corners.add(this.createFocusIndicator('bottom', 'left', DEG_270));
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
    this.animationPlayers.forEach((player) => player.destroy());
  }

  private createFocusIndicator(
    vertical: 'top' | 'bottom',
    horizontal: 'left' | 'right',
    rotation: number,
  ): SVGElement {
    const corner = this.createSvg();
    this.renderer.setStyle(corner, vertical, '-0.1rem');
    this.renderer.setStyle(corner, horizontal, '-0.1rem');
    this.translateXY(corner, rotation);

    return corner;
  }

  private createSvg(): SVGElement {
    const svg = this.renderer.createElement('svg', 'svg');
    this.renderer.setAttribute(svg, 'data-cy', 'smm2-focus');
    this.renderer.setAttribute(svg, 'data-testid', 'smm2-focus');
    this.renderer.setAttribute(svg, 'viewBox', '126.579 159.636 86.925 86.926');
    this.renderer.setAttribute(svg, 'width', '86.925');
    this.renderer.setAttribute(svg, 'height', '86.925');
    this.renderer.setAttribute(svg, 'fill', this._smm2FocusColor);

    const path = this.renderer.createElement('path', 'svg');
    this.renderer.setAttribute(
      path,
      'd',
      'M 126.579 246.562 L 126.579 213.965 C 126.579 183.96 150.902 159.636 180.907 159.636 L 213.504 159.636 Z',
    );
    this.renderer.appendChild(svg, path);

    this.renderer.setStyle(svg, 'display', 'block');
    this.renderer.setStyle(svg, 'position', 'absolute');
    this.renderer.setStyle(svg, 'height', '12px');
    this.renderer.setStyle(svg, 'width', '12px');

    return svg;
  }

  private translateXY(el: SVGElement, rotation: number): void {
    this.renderer.setStyle(el, 'transform',  `rotate(${rotation}deg) translateX(0%) translateY(0%)`);
    const translateXyAnimation = this.animationBuilder.build([
      animate(
        '1.5s',
        keyframes([
          style({
            easing: 'ease-in-out',
            transform: `rotate(${rotation}deg) translateX(0%) translateY(0%)`,
          }),
          style({
            easing: 'ease-in-out',
            transform: `rotate(${rotation}deg) translateX(-10%) translateY(-10%)`,
          }),
          style({
            easing: 'ease-in-out',
            transform: `rotate(${rotation}deg) translateX(0%) translateY(0%)`,
          }),
        ]),
      ),
    ]);

    const player = translateXyAnimation.create(el);
    this.animationPlayers.add(player);

    player.play();

    player.onDone(() => {
      player.restart();
    });
  }
}
