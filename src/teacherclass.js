import { PersonClass } from "./personclass";

//This can be used outside because of export
export function Promote() {}

export class TeacherClass extends PersonClass {
  constructor(name, degree) {
    super(name);
  }
  teach() {
    console.log("Teacher teaches too!");
  }
}
