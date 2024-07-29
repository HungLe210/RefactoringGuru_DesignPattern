interface SortStrategy {
    sort(data: number[]): number[];
}

type CompareFunction = (a: number, b: number) => boolean;

function Bubble(data: number[], compareFn?: CompareFunction): number[] {
    let count = 0;
    const compare = compareFn || ((a: number, b: number) => a > b);
    console.log('Sorting using Bubble Sort');
    const arr = [...data];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                count++;
            }
        }
    }
    console.log(`BubbleSort processed ${count} changes!`);
    return arr;
}

class BubbleSort implements SortStrategy {
    public sort(data: number[]): number[] {
        return Bubble(data);
    }
}

class QuickSort implements SortStrategy {
    protected count: number = 0;
    public sort(data: number[]): number[] {
        console.log('Sorting using Quick Sort');
        if (data.length <= 1) {
            return data;
        }
        const [pivot, ...rest] = data;
        const left = rest.filter(x => x < pivot);
        const right = rest.filter(x => x >= pivot);

        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

const descendingCompare: CompareFunction = (a, b) => a < b;

class BubbleSortDescending implements SortStrategy {
    public sort(data: number[]): number[] {
        return Bubble(data, descendingCompare)
    }
}
class Sorter {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    public sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}


const data = [10, 3, 15, 7, 8, 23, 74, 18];

const sorter = new Sorter(new BubbleSort()); // Default algorithm is ASC BUBBLE SORT
console.log('Initial Data:', data);

console.log('Sorted Data:', sorter.sort(data));

sorter.setStrategy(new QuickSort());
console.log('Sorted Data:', sorter.sort(data));

sorter.setStrategy(new BubbleSortDescending());
console.log('Sorted Descending Data:', sorter.sort(data));
