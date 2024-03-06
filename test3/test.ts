function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
    const MAX_ROLL = 6;
    const MAX_STEPS = 100;
    const queue: [number, number[]][] = [[1, []]];
    const visited = new Set<number>();
    visited.add(1);
    while (queue.length) {
        const [position, rolls] = queue.shift()!;
        if (position === MAX_STEPS) {
            return rolls;
        }
        for (let roll = 1; roll <= MAX_ROLL; roll++) {
            const newPosition = position + roll;
            if (newPosition > MAX_STEPS) {
                continue; 
            }
            const ladder = board.ladders.find(([start, end]) => start === newPosition);
            if (ladder) {  
                const ladderEndPosition = ladder[1];
                if (!visited.has(ladderEndPosition)) {
                    queue.push([ladderEndPosition, [...rolls, roll]]);
                    visited.add(ladderEndPosition);
                }
                continue;
            }
            const snake = board.snakes.find(([start, end]) => start === newPosition);
            if (snake) {
                const snakeEndPosition = snake[1];
                if (!visited.has(snakeEndPosition)) {
                    queue.push([snakeEndPosition, [...rolls, roll]]);
                    visited.add(snakeEndPosition);
                }
                continue;
            }
            if (!visited.has(newPosition)) {
                queue.push([newPosition, [...rolls, roll]]);
                visited.add(newPosition);
            }
        }
    }
    throw new Error("No solution found");
}

export { quickestPath };