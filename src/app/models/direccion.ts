export class Direccion {
    addressId: number;
    alias: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    active: boolean;
    createdAt: string;
    clienteId: number;

    constructor() {
        this.addressId = 0;
        this.alias = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.country = '';
        this.active = true;
        this.createdAt = '';
        this.clienteId = 0;
    }
}