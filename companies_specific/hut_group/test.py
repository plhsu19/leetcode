
if __name__ == "__main__":
    with open('input101.txt', 'w') as file:
        file.write('0.352 0.893\r\n')
        file.write('0.934 0.342\r\n')

    with open('input10.txt', 'r') as reader:
        lines = reader.readlines()
        print(lines)
        a = lines[0].split(' ')
        print(a[1])
        print(float(a[1])+ 2)



        
        

