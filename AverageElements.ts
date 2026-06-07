function countResponseTimeRegressions(responseTimes: number[]): number {
    let count = 0;
    let sum = responseTimes[0]


    for (let i = 1; i < responseTimes.length; i++) {
        const average = sum / i

        if(responseTimes[i] > average){
            count++
        }
        sum += responseTimes[i]
    }
    return count
}



const resp = countResponseTimeRegressions([100, 200, 150, 300])

console.log(resp);
