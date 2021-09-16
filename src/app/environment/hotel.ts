import { IGuest } from './guest';

export interface IHotel {
    name: String,
    direction: String,
    phone: String,
    Estate: String,
    guest: IGuest
}
