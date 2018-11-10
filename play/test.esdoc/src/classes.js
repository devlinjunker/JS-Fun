/**
 * This is the base class that we will extend from
 */
export class BaseClass{
  /**
   * BaseClass constructor
   * @param  {string} a an example of a property on the constructor
   */
  constructor(a){
    console.log("in base: "+ a)
  }

  /**
   * a method that will be called in the base class
   * @return {void}
   */
  method(){
    console.log("in base method");
  }

  /**
   * a method that will be overwritten
   * @return {void}
   */
  overwrite(){
    console.log("in base overwrite");
  }
}

/**
 * This is the extended class, it overwrites the base class constructor and
 * overwrite method
 */
export default class ExtendedClass extends BaseClass {
  /**
   * Overwrites the BaseClass constructor and provides a
   * default parameter if none provided
   *
   * @param  {String} a the parameter from BaseClass, not required though
   */
  constructor(a){
    if(a == undefined)
      super("default")
    else
      super(a);
  }

  /**
   * Overwritten method in the ExtendedClass
   *
   * @return {void}
   */
  overwrite(){
    console.log("in parent overwrite");
  }
}
