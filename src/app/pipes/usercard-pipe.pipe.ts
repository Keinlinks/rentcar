import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usercardPipe',
})
export class UsercardPipePipe implements PipeTransform {
  transform(value: number): string {
    if (value === undefined || value === null || value === 0) {
      return 'N/A';
    }

    return value.toString();
  }
}
