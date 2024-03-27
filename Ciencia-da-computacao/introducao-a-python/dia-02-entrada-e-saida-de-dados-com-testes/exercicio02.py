import sys

valores = input("Digite os valores separados por espaço: ")

valores = valores.split(" ")
soma = 0
for valor in valores:
    if valor.isdigit():
        soma += int(valor)
    else:
        print(f"Erro ao somar valores, {valor} é um valor inválido", file=sys.stderr)

print(f"A soma dos valores validos é: {soma}")
