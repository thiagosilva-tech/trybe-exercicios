import math


def calcula_tinta_e_preco(area):
    litros_necessarios = area / 3
    latas = math.ceil(litros_necessarios / 18)
    preco = latas * 80
    return latas, preco


latas, preco = calcula_tinta_e_preco(80)

print(f"Quantidade de latas: {latas}, Preço total: R$ {preco}")
