export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    super(message);
    //https://stackoverflow.com/questions/41102060/typescript-extending-error-class/41102306#41102306
    //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget

    Object.setPrototypeOf(this, new.target.prototype);

    console.log(`${this.constructor.name} encountered due to ${this.message}`);
  }
  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
