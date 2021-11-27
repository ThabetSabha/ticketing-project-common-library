import { OrderStatusEnum, Subjects } from "..";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    expiresAt: string;
    status: OrderStatusEnum;
    ticket: {
      id: string;
      price: number;
    };
  };
}
