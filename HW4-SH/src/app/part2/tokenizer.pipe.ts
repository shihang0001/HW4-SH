import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tokenizer'
})
export class TokenizerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let separator = ',';

    if (args != null) {
      separator = args;
    }
    return value.split('').join(separator);
  }

}
