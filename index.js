//npm install --save readline-sync

const rl = require('readline-sync')

// importando as classes

const Prisma = require('./models/Prisma')
const Piramide = require('./models/Piramide')

let op = 0 

do{
    console.log('|-------------------------------------|')
    console.log('|-- 1 = Prsima    ------------------|')
    console.log('|-- 2 = Piramide        ------------------|')
    console.log('|-------------------------------------|')
    console.log('\n')

    op = Number(rl.question('qual a sua opcao'))
    console.log(op)

    if(op === 1){
         let lado = Number(rl.question('qual o valor do lado'))
         let area = Number(rl.question('qual o valor do area'))
         let altura = Number(rl.question('qual o valor do altura'))
         let prisma = new Prisma(lado,area,altura)
         let areaBasePris = prisma.calcularAreaBase()
         let volume = prisma.calcularVolumePrisma()

         console.log(`o valor da area da base do prisma com lado${lado} é: ${areaBasePris.toFixed(3)}`)
         console.log(`o valor do volume do prisma é de area${area} e altura${altura} é: ${volume.toFixed(3)}`)
    }else if(op === 2){
        let lado = Number(rl.question('qual o valor do lado'))
        let area = Number(rl.question('qual o valor do area'))
        let altura = Number(rl.question('qual o valor do altura'))
        let piramide = new Piramide(lado,area,altura)
        let areaBasePir = piramide.calcularAreaBase()
        let volume = piramide.calcularVolumePir()

        console.log(`o valor da area da base da piramide com lado${lado} é: ${areaBasePir.toFixed(3)}`)
        console.log(`o valor do volume da piramide com altura${altura} é: ${volume.toFixed(3)}`)

    }else{
        console.log('Opcão Inválida! Digite novamente!')
    }

}while(op !== 0)

console.log('fim do programa')
