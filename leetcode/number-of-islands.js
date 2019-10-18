
/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/
const check = (grid, i, j) => {
  if (i < grid.length && j < grid[0].length && i >= 0 && j >= 0 && grid[i][j] === '1') {
    grid[i][j] = '0';
    check(grid, i, j - 1);
    check(grid, i, j + 1);
    check(grid, i - 1, j);
    check(grid, i + 1, j);
    return 1;
  }

  return 0;
};

var numIslands = function (grid) {
  if (!grid || !grid.length) {
    return 0;
  }

  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      islands += check(grid, i, j);
    }
  }

  return islands;
};