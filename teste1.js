// 2. Número binário em uma lista encadeada

//  Um número binário é representado como uma série de 0s e 1s.  Neste desafio, a série estará na forma de uma lista encadeada individualmente.  Cada instância de nó, um LinkedListNode, possui um valor, dados e um ponteiro para o próximo nó, next.  Dada uma referência ao cabeçalho de uma lista encadeada individualmente, converta o número binário representado em um número decimal.

 

//  Exemplo
//  PS Exemplo Lista encadeada correspondente ao número binário (010011)[2] ou (19)[10].

 

//  Descrição da função

//  Complete a função getNumber no editor abaixo.

 

//  getNumber tem o(s) seguinte(s) parâmetro(s):

//      binário: referência ao início de uma lista de dígitos binários de encadeamento simples

 

//  Retorna:

//      int: uma representação (inteiro longo)[10] do número binário

 

//  Restrições

//      1 ≤ n ≤ 64
//      Todos LinkedListNode.data ∈ {01}
//      O descrito (inteiro)[2] <264

 
//  Formato de entrada para teste personalizado

//  A entrada do stdin será processada da seguinte maneira e passada para a função.

 

//  A primeira linha contém um inteiro n, o tamanho do binário da lista encadeada.

//  Cada uma das próximas n linhas contém um inteiro LinkedListNode.data[i] onde 0 ≤ i < n.
//  Exemplo de Caso 0

//  Entrada de amostra

//  Função STDIN
//  ----- -----
//  7 → binário[] tamanho n = 7
//  0 → binário LinkedListNode.data = [0, 0, 1, 1, 0, 1, 0]
//  0                                      
//  1                                      
//  1                                      
//  0                                      
//  1                                      
//  0                                       

//  Saída de amostra

//  26

//  Explicação
//  Amostra 0 A lista vinculada é fornecida como entrada.

//  A lista encadeada forma o número binário 0011010 → (0011010)[2] = (26)[10]
//  Exemplo de Caso 1

//  Entrada de amostra

//  Função STDIN
//  ----- -----
//  10 → binário[] tamanho n = 10
//  0 → binário LinkedListNode.data = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
//  0                                      
//  0                                      
//  0                                      
//  0                                      
//  1                                      
//  1                                      
//  1                                      
//  1                                      
//  1                                      

//  Saída de amostra

//  31

//  Explicação
//  Amostra 1 A lista encadeada fornecida como entrada.

//  A lista encadeada forma o número binário 0000011111 → (0000011111)[2] = (31)[10]