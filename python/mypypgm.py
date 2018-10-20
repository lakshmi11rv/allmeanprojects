# name ='Suresh'
# print(name)
myfile = open("myfile.txt","w")
myfile.write("Hello")
myfile.close()

num1=input("Enter first number")
num2=input("Enter second number")
res=int(num1)+int(num2)
myfile = open("myfile.txt","a")
myfile.write("\n" + "Result of operation is"+ " " +str(res))
myfile.close()