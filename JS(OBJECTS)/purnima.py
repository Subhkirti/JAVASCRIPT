a=[]
b=[]
c=[]
n=int(input("enter a value"))
m=int(input("enter end "))
while n<=m:
    i=1
    while i<=10:
        a.append(n*i)
        b.append(a)
        i=i+1
    n=n+1
print(b)