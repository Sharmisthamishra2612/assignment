export const isOrderMaintained = (clickedNumbers) => {
    const n = clickedNumbers.length;
    if(n === 0) return true;
    if (n === 1 && clickedNumbers[0] !== 1) return false;
    for(let i=0; i<n-1; i++) {
        if(clickedNumbers[i+1] !== clickedNumbers[i]+1){
            return false;
        }
    }
    return true;
}

export const generateRandomNumbers = () => {
    const arr = [];
    const min = 1;
    const max = 5;
    for(let i=0; i<5; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr;
}