import React, { useState } from 'react'
import Array from './Array'
import * as algos from './algorithms'
import Toolbar from './Toolbar'


export default function App() {

  const [array, setArray] = useState(algos.createRandomArray(150));
  const [currentSort, setSort] = useState('Quick Sort');
  const [sorting, setSorting] = useState(false);
  const [length, setLength] = useState(150);
  
  
  function handleStartSorting(e) {
    const functionMap = {'Bubble Sort': algos.bubbleSort, 'Merge Sort': algos.mergeSort, 'Quick Sort': algos.quickSort, 'Heap Sort': algos.heapSort, 'Radix Sort': algos.radixSort};
    setSorting(true);
    functionMap[currentSort](array, setArray, setSorting);
  };

  const sortInfo = {'Bubble Sort': {'time': 'O(n^2)', 'space': 'O(1)'}, 'Merge Sort': {'time': 'O(n*log(n))', 'space': 'O(n)'}, 'Quick Sort': {'time': 'O(n*log(n))', 'space': 'O(n)'}, 'Heap Sort': {'time': 'O(n*log(n))', 'space': 'O(n)'}, 'Radix Sort': {'time': 'O(d*(n+b))', 'space': 'O(n+b)'}};

  return (
    <>
      <div className="controlsOuter">
        <div className="controlsContainer">
          <div className="headerContainer">
            <h1>Sorting Alogirthm Visualizer</h1>
          </div>
          
            {sorting ? 
            <div className="sortInfo">
              <h3>{currentSort} in progress...</h3>
              <h4>Time Complexity: {sortInfo[currentSort]['time']}</h4>
              <h4>Space Complexity: {sortInfo[currentSort]['space']}</h4>
            </div>
            :
            <div className="toolbarContainer">
              <Toolbar handleStartSorting={handleStartSorting} setSort={setSort} setArray={setArray} currentSort={currentSort} length={length} setLength={setLength}/>
            </div>}
          
        </div>
      </div>
      <Array array={array} />
        
    </>
  )
};

