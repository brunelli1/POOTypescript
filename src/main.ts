class Empresa {
    nome: string;
    cnpj: string;
    colaboradores: Colaborador[] = []

    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    };

    addNome(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador);
    }

    showName():void{
        for(const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
};

class Colaborador{
    constructor(readonly nome: string, readonly sobrenome: string){}
};





// ======================= Abstração ========================= //

class Animal{
    nome:string;

    constructor(nome: string){
        this.nome = nome
    }

    makeSound(){
        console.log(`${this.nome} faz algum som`)
    }
};

const cachorro = new Animal("Caramelo")
const gato = new Animal("Fido")
cachorro.makeSound();
gato.makeSound();

console.log("--------------------------")
// ================= Encapsulamento ========================== //

class ContaBancaria{
    private saldo: number

    constructor(saldoInicial: number){
        this.saldo = saldoInicial
    };

    sacar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
        }
        this.verSaldo()
    };

    depositar(valor: number){
        if(valor > 0){
            this.saldo += valor
        }
        this.verSaldo()
    };

    verSaldo(){
        console.log(`Seu saldo é de $${this.saldo} reais`)
    }
}

const minhaConta = new ContaBancaria(1000); // Meu saldo inicial
minhaConta.depositar(500); // Depositei 500 reais
minhaConta.sacar(100); // Saquei 400 reais
minhaConta.verSaldo(); // Vejo meu Saldo

console.log("--------------------------")
// ================= Herança ============== //

class Animalzinho{
    nome: string

    constructor(nome: string){
        this.nome = nome
    }
    fazerSom(){
        console.log(`${this.nome} faz algum som`)
    }
}

class Cachorro extends Animalzinho{
    latir(){
        console.log(`${this.nome} está latindo`)
    }
}

class Gato extends Animalzinho{
    miar(){
        console.log(`${this.nome} está miando`);
    }
};

const meuCachorro = new Cachorro("Caramelo");
const meuGato = new Gato("Fido")
meuCachorro.fazerSom();
meuCachorro.latir();

meuGato.fazerSom();
meuGato.miar();

console.log("--------------------------")

//======================== Polimorfismo ================= //


class Calculadora{
    somar(a: number, b: number):number {
         return a + b
    }

    concatena(a: string, b: string): string{
        return a + b
    }
};

const calc = new Calculadora();
const resultado1 = calc.somar(5, 5);
const resultado2 = calc.concatena("5", "5");

console.log(resultado1);
console.log(resultado2);



class Animalzito{
    fazerSom(){
        console.log("Faz algum som")
    };
}

class Cachorrito extends Animalzito{
    fazerSom(): void {
        console.log("O cachorro late")
    }
};

class Gatito extends Animalzito{
    fazerSom(): void {
        console.log("O gato mia")
    }
};

const meuAnimal: Animalzito = new Cachorrito()
const meuAnimal2: Animalzito = new Gatito()
meuAnimal.fazerSom(); // Chama o método específico da classe Cachorro
meuAnimal2.fazerSom(); // Chama o método da classe Gato

console.log("--------------------------")

// ============ Agregaçao =================== //

class CarrinhoDeCompas{
    private readonly produtos: Produto[] = []

    inserirProdutos(...produtos: Produto[]):void {
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }

    quantidadeProdutos():number{
        return this.produtos.length
    }

    valorTotal():number{
        return this.produtos.reduce((soma, produto)=> soma + produto.preço, 0)
    }
}

class Produto {
    constructor(private nome: string, public preço: number){}
}


const carrinhoDeCompras = new CarrinhoDeCompas();

const produto1 = new Produto("Camiseta", 49.9)
const produto2 = new Produto("Chapéu", 25.9)
const produto3 = new Produto("Short", 60.9)

carrinhoDeCompras.inserirProdutos(produto1,  produto2, produto3);

console.log(carrinhoDeCompras.valorTotal())
console.log(carrinhoDeCompras.quantidadeProdutos())

console.log("--------------------------")

// ============== Composição ============== //

