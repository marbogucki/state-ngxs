import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class Destroy implements OnDestroy {
  protected destroy$: Subject<unknown> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
