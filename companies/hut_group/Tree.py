
# cityNodes: int, cityFrom: int array, cityTo: int array
def hospital(cityNodes, cityFrom, cityTo):
    cityDict = {}       # dic that is used to build the tree and also acts as a piority queue
    closeSet = set()       # set that stores visited nodes
    numCities = cityNodes
    numHospitals = 0


    class Node:
        def __init__(self):
            self.neighborCities = set() # Set containing all neighboring city-nodes for a city object
            self.hasHospital = False


    for i in range(1, numCities + 1):
        cityDict[i] = Node()

    for j in range(len(cityFrom)):
        if cityDict[cityTo[j]] not in cityDict[cityFrom[j]].neighborCities:
            cityDict[cityFrom[j]].neighborCities.add(cityDict[cityTo[j]])
        if cityDict[cityFrom[j]] not in cityDict[cityTo[j]].neighborCities:
            cityDict[cityTo[j]].neighborCities.add(cityDict[cityFrom[j]])

    while cityDict:
        idxCity = max(cityDict, key = lambda o: len(cityDict[o].neighborCities))
        # pop the visited node and add it in the closeSet
        currentCity = cityDict.pop(idxCity)
        closeSet.add(currentCity)

        hospitalInNear = False
        for node in currentCity.neighborCities:
            if node.hasHospital:
                hospitalInNear = True
        
        if not hospitalInNear:
            currentCity.hasHospital = True

    # count the total number of hospitals
    for city in closeSet:
        if city.hasHospital: numHospitals += 1

    return numHospitals

if __name__ == "__main__":
    numNodes = 19
    nodeFrom = [6, 12, 15, 18,  3, 14,  2, 17,  6, 1,  1,  5, 10, 14, 3, 13, 15, 6, 11, 2, 16, 15,  1]
    nodeTo =   [2,  1,  3, 14, 14,  8, 11,  6, 10, 4, 12, 15,  6,  7, 9,  1,  1, 5,  2, 6,  5,  5, 19]
    print('number of min hospitals: ', hospital(numNodes, nodeFrom, nodeTo))

