class Ventilador:
    def __init__(self, cor, preco, potencia, tensao):
        self.tensao = tensao
        self.cor = cor
        self.preco = preco
        self.potencia = potencia

    def cor(self):
        return self.cor

    def ligar(self):
        print("Ventilador ligado")

    def desligar(self):
        print("Ventilador desligado")


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"Nome: {self.nome}, Saldo na conta: {self.saldo_na_conta}, possui um ventilador"
        return f"Nome: {self.nome}, Saldo na conta: {self.saldo_na_conta}, não possui um ventilador"


ventilador_branco = Ventilador("branco", potencia=250, tensao=220, preco=100)
pessoa = Pessoa("Maria", saldo_na_conta=2000)
pessoa.comprar_ventilador(ventilador_branco)

print(pessoa)
