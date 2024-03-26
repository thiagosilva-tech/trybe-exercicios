def tipo_de_triangulo(lado1, lado2, lado3):
    e_triangulo = (
        lado1 + lado2 > lado3 and lado1 + lado3 > lado2 and lado2 + lado3 > lado1
    )
    if not e_triangulo:
        return "Não é um triângulo"
    elif lado1 == lado2 == lado3:
        return "Equilátero"
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        return "Isósceles"
    else:
        return "Escaleno"
