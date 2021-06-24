import sys

class isSubSetSum:
    def __init__(self, in_list, in_sum):
        self.inList = in_list
        self.inSum = in_sum

    def result(self):
        for i in range(len(self.inList)):
            for j in range(i, len(self.inList)):
                if (self.inList[i] + self.inList[j]) == self.inSum:
                    print("There is a subset (", self.inList[i], ", ", self.inList[j], ") with sum ", self.inSum)


if __name__ == "__main__":
    inputLen = len(sys.argv)
    print(inputLen)
    inputList = []
    for i in range(inputLen-1):
       inputList.append(int(sys.argv[i + 1]))
    inputSum = 9
    print(inputList)
    check = isSubSetSum(inputList, inputSum)
    check.result()
    