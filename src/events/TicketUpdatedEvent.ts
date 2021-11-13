import { Subjects } from "./Subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    price: number;
    title: string;
    userId: string;
  };
}
