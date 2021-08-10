import random

class Queue:

    def __init__(self):
        super().__init__()
        # initialize instance variables
        self.sizeOfQueue = 0
        self.first = None
        self.last = None

    # instance class Node to implement double linked list
    class Node:
        def __init__(self, item):
                super().__init__()
                self.item = item
                self.next = None
                self.pre = None
    
    def handleNullArgs(self, item):
        if (item == None):
            raise ValueError('cannot add null into queue')
    
    def handelRemoveEmpty(self):
        if (self.isEmpty()):
            raise Exception('cannot remove item from an empty queue')

    def isEmpty(self):
        return (self.first == None) or (self.last == None) 

    def size(self):
        return self.sizeOfQueue
    
    def addFirst(self, item):
        self.handleNullArgs(item)
        oldFirst = self.first
        self.first = self.Node(item)
        self.first.pre = None
        self.first.next = oldFirst
        if (oldFirst == None):
            self.last = self.first
        else:
            oldFirst.pre = self.first
        self.sizeOfQueue += 1

    def removeLast(self):
        # add exception handling
        self.handelRemoveEmpty()
        # the item stored in the last node, which gonna to be removed
        item = self.last.item
        self.last = self.last.pre
        if(self.isEmpty()):
            self.first == self.last
        else:
            self.last.next = None
        self.sizeOfQueue -= 1
        return item

    def __iter__(self):
        self.current = self.first
        return self
    
    # implement iterator
    def __next__(self):
        if (self.current == None):
            raise StopIteration
        else:
            item = self.current.item
            self.current = self.current.next
        return item

# test client
if __name__ == "__main__":
    
    queue1 = Queue()
    queue2 = Queue()
    
    # call addFirst 10 times and then call removeLast 10 times and print the result
    # to check two functions. The output should be 0, 1, 2, 3, ..., 9
    for i in range(10):
        queue1.addFirst(i)
    print('queue is empty: ', queue1.isEmpty())
    print(queue1.size())
    for i in range(10):
        print(queue1.removeLast())
    print('queue is empty: ', queue1.isEmpty())
    print('size of queue: ', queue1.size())
    print('-------------------------------------------------------------------')

    # randomly call addFirst, removeLast, size and isEmpty
    # to check the combination of various functions
    for i in range(5):
        queue2.addFirst(15 * random.random())
    
    random.seed(30)
    for i in range(15):
        r = int(4 * random.random())
        if r < 1: queue2.addFirst(15.0 * random.random())
        elif r < 2: print('remove from the last: ', queue2.removeLast())
        elif r < 3: print('the queue is empty: ', queue2.isEmpty())
        elif r < 4: print('the size of the queue is: ', queue2.size())
        print(i)
        print()
    
    print('-------------------------------------------------------------------')

    # test iterator
    for itr in queue2:
        print(itr)
        
