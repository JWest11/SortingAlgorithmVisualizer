import * as styling from './styling'

export function createRandomArray (length) {
    let arrayInitial = [];
    for (let i=1; i<=length; i++) {
        arrayInitial.push(i);
    };
    let arrayRandom = [];
    while (arrayInitial.length > 0) {
        let index = Math.floor(Math.random() * arrayInitial.length);
        arrayRandom.push(arrayInitial[index]);
        arrayInitial.splice(index, 1);
    };
    return arrayRandom;
};

export function bubbleSort (array, setArray, setSorting) {
    let arr = [...array]
    let p1 = 0;
    let p2 = 1;
    let swap = true;
    let N = arr.length;
    
    function cycle () {
        swap = false;
        p1 = 0;
        p2 = 1;
        innerCycle();
    };

    function innerCycle () {
        if (arr[p1] > arr[p2]) {
            [arr[p1], arr[p2]] = [arr[p2], arr[p1]];   
            swap = true;
            setArray([...arr]);
        };
        styling.removeArrayStyling();
        styling.addArrayStyling([p1]);
        p1 += 1;
        p2 += 1;
        if (p2 < N) {
            setTimeout(() => innerCycle(), 5);
        } else if (!swap) {
            styling.removeArrayStyling();
            setArray([...arr]);
            setSorting(false);
            return;
        } else {
            N -= 1;
            setTimeout(() => cycle(), 5);
        };
    };

    cycle();
    
};

export function mergeSort (array, setArray, setSorting) {
    let arr = [];
    let print = [];
    let c1 = 0;
    let c2 = 0;
    array.forEach((num) => {
        arr.push([num]);
    });
    let out = [];
    let curr = [];
    let i = 0;
    C1();

    function C1 () {
        print = [];
        arr.forEach((inner) => {
            inner.forEach((num) => {
                print.push(num);
            })
        });
        setArray([...print]);
        if (arr.length <= 1) {
            styling.removeArrayStyling();
            setArray([...print]);
            setSorting(false);
            return;
        } else {
            out = [];
            i = 0;
            setTimeout(() => C2(), 10)
        };
        
    };

    function C2 () {
        if (i >= arr.length) {
            arr = out;
            setTimeout(() => C1(), 10)
        } else {
            if (i+1 >= arr.length) {
                out.push(arr[i]);
                arr = out;
                C1();
            } else {
                curr = [];

                let count = 0;
                out.forEach((ar) => {
                    count += ar.length;
                });
                c1 = count;
                c2 = count + arr[i].length;

                setTimeout(() => C3(), 20)
            };
        };
    };

    function C3 () {
        if (arr[i].length > 0 && arr[i+1].length > 0) {

            styling.removeArrayStyling();
            styling.addArrayStyling([c1, c2]);

            if (arr[i][0] < arr[i+1][0]) {
                curr.push(arr[i].shift());
                c1 += 1;
            } else {
                curr.push(arr[i+1].shift());
                c2 += 1;
            };
            setTimeout(() => C3(), 20)
        } else {
            if (arr[i].length) {
                curr.push(...arr[i]);
                arr[i] = [];
            } else {
                curr.push(...arr[i+1]);
                arr[i+1] = [];
            };
            out.push(curr);

            print = [];
            out.forEach((ar) => {
                ar.forEach((num) => {
                    print.push(num);
                });
            });
            arr.forEach((ar) => {
                if (ar.length) {
                    ar.forEach((num) => {
                        print.push(num);
                    });
                };
            });
            setArray([...print]);
            i+=2;
            setTimeout(() => C2(), 10)
        };
    };

};

export function quickSort (array, setArray, setSorting) {
    let arr = [...array];
    let stack = [0, arr.length-1];
    let pivot = null;
    let p1 = null;
    let p2 = null;
    let l = null;
    let r = null;
    C1();

    function C1 () {
        if (!stack.length) {
            styling.removeArrayStyling();
            setSorting(false);
            return;
        };
        r = stack.pop();
        l = stack.pop();
        pivot = arr[r];
        p1 = l;
        p2 = l;
        setTimeout(() => {
            C2();
        }, 20);
    };

    function C2 () {
        styling.removeArrayStyling();
        styling.addArrayStyling([p1,p2]);
        if (arr[p2] <= pivot) {
            [arr[p2], arr[p1]] = [arr[p1], arr[p2]];
            setArray([...arr]);
            p1 += 1;
        };
        p2 +=1;
        if (p2 <= r) {
            setTimeout(() => {
                C2();
            }, 20);
        } else {
            if (p1-2 > l) {
                stack.push(l, p1-2);
            };
            if (p1 < r) {
                stack.push(p1, r);
            };
            setTimeout(() => {
                C1();
            }, 20);
        };
    };
        
};

export function heapSort (array, setArray, setSorting) {
    let stack = [];
    let arr = [...array];
    let p = arr.length-1;
    buildMaxHeap();
    

    function sort() {
        if (p <= 0) {
            styling.removeArrayStyling();
            setSorting(false);
            return;
        };
        [arr[0], arr[p]] = [arr[p], arr[0]];
        setArray([...arr]);
        styling.removeArrayStyling();
        styling.addArrayStyling([0, p]);
        stack.push(p, 0);
        p -= 1;
        setTimeout(() => {
            heapify();
        }, 20);
    };


    function heapify () {
        let i = stack.pop();
        let N = stack.pop();
        let max = i;
        let l = 2*i + 1;
        let r = 2*i + 2;
        if (l < N && arr[l] > arr[max]) {
            max = l;
        };
        if (r < N && arr[r] > arr[max]) {
            max = r;
        };
        if (max != i) {
            [arr[i], arr[max]] = [arr[max], arr[i]];
            setArray([...arr]);
            styling.removeArrayStyling();
            styling.addArrayStyling([i, max]);
            stack.push(N, max);
        };
        if (stack.length) {
            setTimeout(() => {
                heapify();
            }, 20);
        } else {
            setTimeout(() => {
                sort();
            }, 20);
        };
    };

    function buildMaxHeap () {
        let N = arr.length;
        for (let i=0; i < Math.floor(N/2); i++) {
            stack.push(N, i);
        };
        heapify();
    };
};

export function radixSort (array, setArray, setSorting) {
    let arr = [...array];
    const base = 5;
    const N = arr.length;
    const max = Math.max(...arr);
    let exp = 1;
    sort();

    function sort () {
        if (max/exp >= 1) {
            setTimeout(() => {
                countingSort();
            }, 20);
        } else {
            setSorting(false);
            return;
        };
    };

    function countingSort () {
        let storage = [];
        for (let i=0; i<base; i++) {
            storage.push(0);
        };
        let out = [];
        let p = 0;

        C1();
        
        function C1 () {
            if (p >= N) {
                for (let i=1; i<base; i++) {
                    storage[i] += storage[i-1];
                };
                for (let i=N-1; i>=0; i--) {
                    let index = Math.floor(arr[i]/exp);
                    out[storage[index % base] -1] = arr[i];
                    storage[index % base] -= 1;
                };
                arr = [...out];
                styling.removeArrayStyling();
                setArray([...arr]);
                exp *= base;
                setTimeout(() => {
                    sort();
                }, 20);
            } else {
                setTimeout(() => {
                    C2();
                }, 20);
            };
        };

        function C2 () {
            styling.removeArrayStyling();
            styling.addArrayStyling([p]);
            let index = Math.floor(arr[p]/exp);
            storage[index % base] += 1;
            p += 1;
            C1();
        };
    };
};