import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    var vatPercentage:number=18;
    if(args){
     vatPercentage = args;
    }
    return  value +(value/100*vatPercentage);
  }

}
