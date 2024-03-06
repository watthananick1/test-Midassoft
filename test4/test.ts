function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    const dp: number[] = new Array(shops.length).fill(Infinity);
    dp[0] = Math.abs(start - shops[0]);
    for (let i = 1; i < shops.length; i++) {
      for (let j = 0; j < i; j++) {
        const energyWalk = Math.abs(shops[i] - shops[j]);
        dp[i] = Math.min(dp[i], dp[j] + energyWalk);
      }
      for (const station of stations) {
        const energyBus = Math.abs(shops[i] - station);
        dp[i] = Math.min(dp[i], dp[0] + energyBus);
      }
    }
    const energyToTarget = Math.abs(target - shops[shops.length - 1]);
    return dp[shops.length - 1] + energyToTarget;
  }
  
export { minEnergy };
