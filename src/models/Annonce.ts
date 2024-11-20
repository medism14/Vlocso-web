import { Conversation } from "./Conversation";
import { Image } from "./Image";

export interface Annonce {
    annonce_id: number;
    title: string;
    price: number;
    start_date: Date;
    end_date: Date;
    payer_id: number;
    transaction: string;
    annonce_state: string;
    country: string;
    city: string;
    phone_number: string;
    expiration_date: Date;
    remain: number;
    created_at: Date;
    updated_at: Date;
    images: Image[];
    // getAnnonce(): void;
    // createAnnonce(): void;
    // updateAnnonce(): void;
    // deleteAnnonce(): void;
    // getPhone(): string;
    // getAnnonce(): void;
    // getImages(): Image[];
    // getConversations(): Conversation[];
  }