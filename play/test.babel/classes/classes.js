

export class BaseClass{
  constructor(a){
    console.log("in base: "+ a)
  }

  method(){
    console.log("in base method");
  }

  overwrite(){
    console.log("in base overwrite");
  }
}


export default class ExtendedClass extends BaseClass {
  constructor(a){
    if(a == undefined)
      super("default")
    else
      super(a);
  }

  overwrite(){
    console.log("in parent overwrite");
  }

}
