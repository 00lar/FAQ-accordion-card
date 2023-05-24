Proceso Problema2 
Definir a[5]={j, e, s, u, s}, b[5]={m, a, r, i, o}, c[10] Como Caracter 
Definir i, j, k Como Entero 
j <- 0 
k <- 0 
Para i <- 0 Hasta 9 Hacer 
    si i%2 = 0 Entonces 
        c[i] <- a[j] 
        j <- j+1 
    SiNo 
        c[i] <- b[k] 
        k <- k+1 
    FinSi 
FinPara 
Para i<-0 Hasta 9 Hacer 
    Imprimir c[i], " " 
FinPara 
FinProceso 