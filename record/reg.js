class Empleado {
    constructor(name, add, city, phone, email) {
        this.nombre = name
        this.domicilio = add
        this.ciudad = city
        this.telefono = phone
        this.email = email
    }
}

class Directorio {
    constructor() {
        this.dir = new Array()
    }

    add(rec) {
        if(!rec instanceof Empleado) throw "Campo invalido"
        this.dir.push(rec)
    }

    modifify(x, rec) {
        if(!rec instanceof Empleado) throw "Campo invalido"
        this.dir[x-1] = rec
    }

    remove(x) {
        this.dir.splice(x-1, 1)
    }

    printReport() {
        console.log(this.dir.length)
        console.log("id\tNombre\tDomicilio\tCiudad\tTelefono\tEmail")
        for(let i = 0; i < this.dir.length; i++){
            console.log((i+1) + "\t"
            + this.dir[i].nombre+"\t"
            + this.dir[i].domicilio + "\t"
            + this.dir[i].ciudad + "\t"
            + this.dir[i].telefono + "\t"
            + this.dir[i].email + "\t")
        }
    }
}

let dir = new Directorio()
dir.add(new Empleado("Oliver", "Av. Gonzalo de Sandoval 1346", "Colima", "3141465426", "olivermaximiliano_rios@ucol.mx"))
dir.add(new Empleado("Oliver", "Av. Gonzalo de Sandoval 1346", "Colima", "3141465426", "olivermaximiliano_rios@ucol.mx"))
dir.add(new Empleado("Oliver", "Av. Gonzalo de Sandoval 1346", "Colima", "3141465426", "olivermaximiliano_rios@ucol.mx"))