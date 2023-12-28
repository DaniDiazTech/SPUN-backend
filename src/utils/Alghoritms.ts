
const Alghoritms = {
    knapsack: async function (list, weights, goal) {
        /*
        Algorithm
        If you have a list of 20 elements and each element has a weight>=1 and weigth<=20, then you should select a random elements from list such that the sum of the weights of the elements is equal to 20, Knapsack problem
        */
        const n = list.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(goal + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= goal; j++) {
            if (weights[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], weights[i - 1] + dp[i - 1][j - weights[i - 1]]);
            }
        }
    }

    const seleccionados = [];
    let i = n;
    let j = goal;

    while (i > 0 && j > 0) {
        if (dp[i][j] !== dp[i - 1][j]) {
            seleccionados.push(list[i - 1]);
            j -= weights[i - 1];
        }
        i -= 1;
    }

    return seleccionados;
    }
}

export default Alghoritms;