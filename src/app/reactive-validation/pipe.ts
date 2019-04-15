import { Component, Pipe } from '@angular/core';

@Pipe({
    name: "pipeconcept"
})
export class PipeConcept {
    transform(val){
        val = val.length;
        return val;  
      
    }
}
