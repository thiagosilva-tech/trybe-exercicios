with open("alunos.txt", "r") as arquivo_entrada, open(
    "reprovados.txt", "w"
) as arquivo_saida:
    for linha in arquivo_entrada:
        nome, nota = linha.split()
        if int(nota) < 6:
            arquivo_saida.write(nome + "\n")
