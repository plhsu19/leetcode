/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    // store string of indces of visited nodes
    const visitedNodes = new Set();

    // traverse the grapth using DFS
    return DFS(grid, 0, 0, visitedNodes);
};


function DFS(grid, i, j, visitedSet) {
    visitedSet.add([i, j].join(','));

    // baseline condition: reach goal
    if (i === grid.length - 1 && j === grid[0].length - 1) {
        return true;
    }

    // condition 1: traverse upper node
    if (grid[i - 1] && !visitedSet.has([i - 1, j].join(','))
        && checkConnection(grid[i][j], grid[i - 1][j], 'u')
    ) {
        console.log(grid[i - 1]);
        if (DFS(grid, i - 1, j, visitedSet)) return true;
    }
    //condition2: traverse down node
    if (grid[i + 1] && !visitedSet.has([i + 1, j].join(','))
        && checkConnection(grid[i][j], grid[i + 1][j], 'd')) {
        if (DFS(grid, i + 1, j, visitedSet)) return true;
    }
    //condition3: traverse right node
    if (grid[i][j + 1] && !visitedSet.has([i, j + 1].join(','))
        && checkConnection(grid[i][j], grid[i][j + 1], 'r')) {
        if (DFS(grid, i, j + 1, visitedSet)) return true;
    }
    //condition2: traverse left node
    if (grid[i][j - 1] && !visitedSet.has([i, j - 1].join(','))
        && checkConnection(grid[i][j], grid[i][j - 1], 'l')) {
        if (DFS(grid, i, j - 1, visitedSet)) return true;
    }

    // visited all children, goal is not found
    return false;
}


function checkConnection(current, neighbor, dir) {
    switch (current) {
        case 1:
            if (dir === 'r' && (neighbor === 1 || neighbor === 3 || neighbor === 5)) {
                return true;
            } else if (dir === 'l' && (neighbor === 1 || neighbor === 4 || neighbor === 6)) {
                return true;
            }
            break;
        case 2:
            if (dir === 'u' && (neighbor === 2 || neighbor === 3 || neighbor === 4)) {
                return true;
            } else if (dir === 'd' && (neighbor === 2 || neighbor === 5 || neighbor === 6)) {
                return true;
            }
            break;
        case 3:
            if (dir === 'l' && (neighbor === 1 || neighbor === 4 || neighbor === 6)) {
                return true;
            } else if (dir === 'd' && (neighbor === 2 || neighbor === 5 || neighbor === 6)) {
                return true;
            }
            break;
        case 4:
            if (dir === 'r' && (neighbor === 1 || neighbor === 3 || neighbor === 5)) {
                return true;
            } else if (dir === 'd' && (neighbor === 2 || neighbor === 5 || neighbor === 6)) {
                return true;
            }
            break;

        case 5:
            if (dir === 'l' && (neighbor === 1 || neighbor === 4 || neighbor === 6)) {
                return true;
            } else if (dir === 'u' && (neighbor === 2 || neighbor === 3 || neighbor === 4)) {
                return true;
            }
            break;

        case 6:
            if (dir === 'r' && (neighbor === 1 || neighbor === 3 || neighbor === 5)) {
                return true;
            } else if (dir === 'u' && (neighbor === 2 || neighbor === 3 || neighbor === 4)) {
                return true;
            }
            break;
    }
    return false;

}


// unit test 
const grid = [[2, 4, 3], [6, 5, 2]];
console.log(hasValidPath(grid))















