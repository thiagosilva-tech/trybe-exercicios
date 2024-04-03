def sum_num_pares_recursivo(numeros):
    if len(numeros) == 0:
        return 0
    if numeros[0] % 2 == 0:
        return 1 + sum_num_pares_recursivo(numeros[1:])
    return sum_num_pares_recursivo(numeros[1:])


array_de_numeros = [1, 2, 3, 4, 5, 6, 7, 8]
print(sum_num_pares_recursivo(array_de_numeros))
