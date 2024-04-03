def maximo_divisor_comum(a, b):
    if b == 0:
        return a
    else:
        return maximo_divisor_comum(b, a % b)


print(maximo_divisor_comum(10, 5))
print(maximo_divisor_comum(10, 3))
print(maximo_divisor_comum(10, 2))
