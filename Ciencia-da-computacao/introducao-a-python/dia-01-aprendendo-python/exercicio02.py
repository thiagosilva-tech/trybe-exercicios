def media_aritmetica(lista):
    return sum(lista) / len(lista)


input01 = int(input("Digite o primeiro número: "))
input02 = int(input("Digite o segundo número: "))
input03 = int(input("Digite o terceiro número: "))
input04 = int(input("Digite o quarto número: "))

print("A média aritmética é: ", media_aritmetica([input01, input02, input03, input04]))
