def maior_nome(nomes):
    maior = ""
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print("O maior nome é:", maior_nome(names))
