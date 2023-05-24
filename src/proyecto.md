INICIO
Declarar o[10]={1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, a[10]={19, 45, 32, 18, 6, 25, 80, 7, 52, 22}, b[10]={1, 3, 10, 9, 10, 32 , 23 , 5, 15, 7}, c[10] , d, f, g, h, x, y, z, i Como Entero
x<-0
y<-0
z<-0
g<-0
Repetir
	Escribir "Objeto"
	Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar o[i], " "
    FinPara
    escribir " "
    Escribir "Valor"
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar a[i], " "
    FinPara
    escribir " "
    Escribir "Peso"
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar b[i], " "
    FinPara
    Escribir " "
    Para i<-0 Hasta 9 Con Paso 1 hacer
        Escribir "Ingrese 1 para usar, 0 para no utilizar el objeto ", i+1
        Leer c[i]
    FinPara
    h<-1
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        si (c[i]==1) Entonces
            h<-h+1
            y<-y+b[i]
            x<-x+a[i]
        FinSi
    FinPara
    Escribir " " 
    Escribir "Objeto"
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar o[i], " "
    FinPara
    Escribir " "
    Escribir "Solucion"
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar c[i], " "
    FinPara
    Escribir " "
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar a[i], " "
    FinPara
    Escribir "Peso"
    Para i<-0 Hasta 9 Con Paso 1 Hacer
        Escribir Sin Saltar b[i], " "
    FinPara
    si (y<60) Entonces
        Escribir "el valor total es de $", x
        Escribir "el peso total es de ", y
    SiNo
        Escribir " "
        Escribir "El peso es mayor 60 kg"
    FinSi
    Escribir " "
    Escribir "Quiere seguir utilizando el programa si=2 no=1"
    Leer z
Hasta Que (z1<> 1)
FIN
