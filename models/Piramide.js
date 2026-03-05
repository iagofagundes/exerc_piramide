class Piramide{
    constructor(lado,area,altura){
    this.area = area
    this.lado = lado
    this.altura = altura
}
 
calcularAreaBase(){
    let raiz_de_3 = Math.sqrt(3)
    return this.lado * this.lado * raiz_de_3 / 4
}

calcularVolumePir(){
    return (1/3) * this.calcularAreaBase() * this.altura
}


}
module.exports = Piramide




