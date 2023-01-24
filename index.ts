// Array
let arrayPrueba: Array<number> = [1,2,3,4]

// Tuples
let tuplesPrueba: [number, string, boolean] = [1, 'pepe', true]

// Enums
const enum EnumsPrueba {Chico, Mediano, Grande, ExtraGrande}

// Objects
type Persona = {
    readonly id: number,
    altura: number,
    peso: number,
    nombre: string
}

let federico: Persona = {
    id: 1,
    altura: 180,
    peso: 90,
    nombre: "Federico"
}