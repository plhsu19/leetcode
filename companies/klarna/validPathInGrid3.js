/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var hasValidPath = function (grid) {
    // store string of indces of visited nodes
    const visitedNodes = new Map();
    const path = [];

    // traverse the grapth using DFS, and re-construct the path
    if(DFS(grid, 0, 0, visitedNodes, 'none', null)) {

        const goalNode = [grid.length - 1, grid[0].length - 1].join('-');

        // add the goal node to the end of the path
        path.push(goalNode);
        let preNode = visitedNodes.get(goalNode);

        // traverse the path until start node
        while (preNode) {
            path.push(preNode);
            preNode = visitedNodes.get(preNode);
        }
    }
    return path;
};

function DFS(grid, i, j, visitedNodes, preDir, preNode) {
    
    // check if the node is visited
    // if not: add to the visited node set
    const currentNode = [i, j].join('-');
    if (visitedNodes.has(currentNode)) return false;
    else {
        visitedNodes.set(currentNode, preNode);
    }

    // baseline condition: reach goal
    if (i === grid.length - 1 && j === grid[0].length - 1) {
        return true;
    }

    // condition 1: traverse upper node
    if (grid[i - 1] && preDir !== 'd'
        && checkConnection(grid[i][j], grid[i - 1][j], 'u')
    ) {
        if (DFS(grid, i - 1, j, visitedNodes, 'u', currentNode)) return true;
    }
    //condition2: traverse down node
    if (grid[i + 1] && preDir != 'u'
        && checkConnection(grid[i][j], grid[i + 1][j], 'd')) {
        if (DFS(grid, i + 1, j, visitedNodes, 'd', currentNode)) return true;
    }
    //condition3: traverse right node
    if (grid[i][j + 1] && preDir != 'l'
        && checkConnection(grid[i][j], grid[i][j + 1], 'r')) {
        if (DFS(grid, i, j + 1, visitedNodes, 'r', currentNode)) return true;
    }
    //condition2: traverse left node
    if (grid[i][j - 1] && preDir != 'r'
        && checkConnection(grid[i][j], grid[i][j - 1], 'l')) {
        if (DFS(grid, i, j - 1, visitedNodes, 'l', currentNode)) return true;
    }

    // visited all children (adjacent vertices) of the node, goal is not found
    return false;
}

const typeGroup = {
    r: new Set([1, 3, 5]),
    l: new Set([1, 4, 6]),
    u: new Set([2, 3, 4]),
    d: new Set([2, 5, 6])
    };


function checkConnection(current, neighbor, dir) {
    
    switch (dir) {
        case 'r':
            if (typeGroup.l.has(current) && typeGroup.r.has(neighbor)) return true;
            break;
        case 'l':
            if (typeGroup.r.has(current) && typeGroup.l.has(neighbor)) return true;
            break;
        case 'u':
            if (typeGroup.d.has(current) && typeGroup.u.has(neighbor)) return true;
            break;
        case 'd': 
            if (typeGroup.u.has(current) && typeGroup.d.has(neighbor)) return true;
            break;
    }
    return false;
}




// unit test 
const grid = [[2, 4, 3], [6, 5, 2]];
console.log(hasValidPath(grid))
// true

const grid2 = [[1,2,1],[1,2,1]];
console.log(hasValidPath(grid2))
// false

const grid3 = [[1,1,2]];
console.log(hasValidPath(grid3))
// false

const grid4 = [[1,1,1,1,1,1,3]];
console.log(hasValidPath(grid4))
// true

const grid5 = [[2],[2],[2],[2],[2],[2],[6]];
console.log(hasValidPath(grid5))
// true




