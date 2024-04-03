def sum_nums_pares(numeros):
    pares = 0
    for num in numeros:
        if num % 2 == 0:
            pares += 1
    print(pares)


array_de_numeros = [1, 2, 3, 4, 5, 6, 7, 8]

sum_nums_pares(array_de_numeros)
