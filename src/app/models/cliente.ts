export class Cliente {
    clienteId: number;
    name: string;
    lastName: string;
    cedula: string;
    birthDate: Date;
    createdAt: Date;
    email: string;
    active: boolean;

    constructor() {
        this.clienteId = 0
        this.name = ''
        this.lastName = ''
        this.cedula = ''
        this.birthDate = new Date()
        this.createdAt = new Date()
        this.email = ''
        this.active = true
    }
}
