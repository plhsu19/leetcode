/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var hasValidPath = function (grid) {
    // store string of indces of visited nodes
    const visitedNodes = new Set();

    // group of type according to directions
    const typeMap = {
     r: new Set([1, 3, 5]),
     l: new Set([1, 4, 6]),
     u: new Set([2, 3, 4]),
     d: new Set([2, 5, 6])
     };

    // traverse the grapth using DFS
    return DFS(grid, 0, 0, visitedNodes, 'none', typeMap);
};

function DFS(grid, i, j, visitedSet, preDir, typeMap) {
    
    // check if the node is visited
    // if not: add to the visited node set
    const currentNode = [i, j].join(',');
    if (visitedSet.has(currentNode)) return false;
    else {
        visitedSet.add(currentNode);
        // console.log(currentNode);
    }
    // console.log(visitedSet);

    // baseline condition: reach goal
    if (i === grid.length - 1 && j === grid[0].length - 1) {
        return true;
    }

    // condition 1: traverse upper node
    if (grid[i - 1] && preDir !== 'd'
        && checkConnection(grid[i][j], grid[i - 1][j], 'u', typeMap)
    ) {
        if (DFS(grid, i - 1, j, visitedSet, 'u')) return true;
    }
    //condition2: traverse down node
    if (grid[i + 1] && preDir != 'u'
        && checkConnection(grid[i][j], grid[i + 1][j], 'd', typeMap)) {
        if (DFS(grid, i + 1, j, visitedSet, 'd')) return true;
    }
    //condition3: traverse right node
    if (grid[i][j + 1] && preDir != 'l'
        && checkConnection(grid[i][j], grid[i][j + 1], 'r', typeMap)) {
        if (DFS(grid, i, j + 1, visitedSet, 'r')) return true;
    }
    //condition2: traverse left node
    if (grid[i][j - 1] && preDir != 'r'
        && checkConnection(grid[i][j], grid[i][j - 1], 'l', typeMap)) {
        if (DFS(grid, i, j - 1, visitedSet, 'l')) return true;
    }

    // visited all children, goal is not found
    return false;
}

function checkConnection(current, neighbor, dir, typeMap) {
    switch (dir) {
        case 'r':
            if (typeMap.l.has(current) && typeMap.r.has(neighbor)) return true;
            break;
        case 'l':
            if (typeMap.r.has(current) && typeMap.l.has(neighbor)) return true;
            break;
        case 'u':
            if (typeMap.d.has(current) && typeMap.u.has(neighbor)) return true;
            break;
        case 'd': 
            if (typeMap.u.has(current) && typeMap.d.has(neighbor)) return true;
            break;
    }
    return false;
}

// unit test 
const grid = [[2, 6]];
console.log(hasValidPath(grid))












