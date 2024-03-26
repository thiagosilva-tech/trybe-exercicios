def valor_a_pagar(litros, tipo_combustivel):
    if tipo_combustivel == "A":
        if litros <= 20:
            desconto = 3
        else:
            desconto = 5
        return litros * 1.9 * (1 - desconto / 100)
    elif tipo_combustivel == "G":
        if litros <= 20:
            desconto = 4
        else:
            desconto = 6
        return litros * 2.5 * (1 - desconto / 100)


print(valor_a_pagar(20, "A"))
print(valor_a_pagar(20, "G"))
