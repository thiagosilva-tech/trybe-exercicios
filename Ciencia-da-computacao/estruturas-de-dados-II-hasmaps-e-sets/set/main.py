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
