import { Subjects } from "..";

export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        paymentId: string;
        orderId: string;
        stripeChargeId: string;
    };
}
