export class Documento {
    idTipoDocumento?: number;
    codigo: string;
    nombre: string;
    descripcion:string;
    estado:boolean;

    constructor(codigo:string, nombre:string, descripcion:string,estado:boolean) {
        this.codigo=codigo;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.estado=estado;
    }
}


