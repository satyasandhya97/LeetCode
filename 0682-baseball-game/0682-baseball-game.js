/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const scores = [];

    for (const op of operations) {
        switch (op) {
            case '+': {
                const len = scores.length;
                scores.push(scores[len - 1] + scores[len - 2]);
                break;
            }
            case 'D':
                scores.push(scores[scores.length - 1] * 2);
                break;
            case 'C':
                scores.pop();
                break;
            default:
                scores.push(Number(op));
        }
    }

    return scores.reduce((sum, score) => sum + score, 0);
};