def maiorNum (a, b):
    if a > b:
        return a
    else:
        return b

input01 = int(input("Digite o primeiro número: "))
input02 = int(input("Digite o segundo número: "))
print("O maior número é: ", maiorNum(input01, input02))