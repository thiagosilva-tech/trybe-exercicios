def encontre_maior_numero_da_lista(numeros):
    if len(numeros) == 1:
        return numeros[0]
    if numeros[0] > numeros[1]:
        numeros.pop(1)
    else:
        numeros.pop(0)
    return encontre_maior_numero_da_lista(numeros)


array_de_numeros = [1, 9, 3, 4, 10, 6, 7, 8]
print(encontre_maior_numero_da_lista(array_de_numeros))
