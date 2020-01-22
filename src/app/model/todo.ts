export class Todo {
    constructor(
      public id?: number,
      public name?: string,
      public type?: string,
      public done?: boolean,
      public deadline?: Date,
      public creationDate?: Date
    ) {}

}
export const TODOS: Todo[] = [
  new Todo(1,'Install NodeJS','type', true),
  new Todo(2,'Install Angular CLI','type', false),
  new Todo(3,'Create new App','type', false),
  new Todo(4,'Develop & Deploy App','type', false)
];