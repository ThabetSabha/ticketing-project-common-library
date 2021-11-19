import { Stan } from "node-nats-streaming";
import { Subjects } from "./Subjects";

interface Event {
  subject: Subjects;
  data: any;
}

// Generics used to enforce ts type checking when publishing events or creating a sub class.
export abstract class publisher<T extends Event> {
  abstract subject: T["subject"];
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(event: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(event), (err) => {
        if (err) {
          return reject(err);
        }
        console.log(`Event published successfully to subject ${this.subject}`);
        resolve();
      });
    });
  }
}
