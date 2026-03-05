class Prisma{
    constructor(lado,area,altura){
    this.area = area
    this.lado = lado
    this.altura = altura
}
 
calcularAreaBase(){
    let raiz_de_3 = Math.sqrt(3)
    return this.lado * this.lado * raiz_de_3 / 4
}

calcularVolumePrisma(){
    return this.area * this.altura
}


}
module.exports = Prisma




