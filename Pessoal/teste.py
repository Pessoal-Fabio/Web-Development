Numero = int(input('Escreva o numero 12: '))
if Numero == 12:
    Divisor = int(input('Escreva o divisor que você quer: '))
    if Numero%Divisor== 0:
        print(f'{Divisor} é considerado um dos divisores de {Numero}')
    else:
        print(f'{Divisor} não é considerado um dos divisores de {Numero}')
else:
    print('Você não escreveu o numero 12')