from conjunto import Conjunto

if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

    conj5 = Conjunto()
    for i in [1, 2, 3]:
        conj5.add(i)
    print(conj5)
    print(1 in conj5)
    print(0 in conj5)

    conj6 = Conjunto()
    for i in range(1, 11):
        conj6.add(i)

    conj7 = Conjunto()
    for i in range(10, 21):
        conj7.add(i)

    conj8 = conj6.union(conj7)
    print(conj8)

    conj9 = Conjunto()
    for i in [1, 2, 3]:
        conj9.add(i)

    conj10 = Conjunto()
    for i in [7, 2, 10]:
        conj10.add(i)

    conj11 = conj9.intersection(conj10)
    print(conj11)

    conj12 = Conjunto()
    for i in [1, 2, 3]:
        conj12.add(i)

    conj13 = Conjunto()
    for i in [7, 2, 10]:
        conj13.add(i)

    conj14 = Conjunto()
    conj15 = conj12.union(conj13)

    print(conj12.issubset(conj15))
    print(conj15.issuperset(conj12))
    print(conj14.issubset(conj15))

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    conjunto_estudantes = Conjunto()
    conjunto_lista1_entregues = Conjunto()
    conjunto_lista2_entregues = Conjunto()

    for elem in estudantes:
        conjunto_estudantes.add(elem)

    for elem in lista1_entregues:
        conjunto_lista1_entregues.add(elem)

    for elem in lista2_entregues:
        conjunto_lista2_entregues.add(elem)

    print(
        "Quem ainda não entregou a lista1?",
        conjunto_estudantes.difference(conjunto_lista1_entregues),
    )

    print(
        "Já entregaram as 2 listas:",
        conjunto_lista1_entregues.intersection(conjunto_lista2_entregues),
    )
    print(
        "Quem já entregou pelo menos uma lista:",
        conjunto_lista1_entregues.union(conjunto_lista2_entregues),
    )
    print(
        "Quem não entregou nenhuma:",
        conjunto_estudantes.difference(
            conjunto_lista1_entregues.union(conjunto_lista2_entregues)
        ),
    )
