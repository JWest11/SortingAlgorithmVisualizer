import React, {useState} from 'react'
import * as algos from './algorithms'
import './toolbar.css'

export default function Toolbar({ setSort, handleStartSorting, setArray, currentSort, length, setLength }) {

    function handleResetArray () {
        setArray(algos.createRandomArray(length));
    };

    function onChangeSort(e) {
      setSort(e.target.value);
    };

    function handleChangeLength (e) {
      let len = e.target.value;
      if (len > 500) {
        setLength(500);
      } else {
        setLength(len);
      };
    };

  return (
    <>
      <div className="toolbarInner">
      <div className="inputGroup">
          <label for="arrayLength" type="number">Array Length</label>
          <input id="arrayLength" placeholder={length} onChange={handleChangeLength}></input>
        </div>
          <button onClick={handleResetArray} className="newArrayButton">New Array <span className="arrayLength">({length})</span></button>
          <select onChange={onChangeSort} value={currentSort}>
            <option value={'Quick Sort'}>Quick Sort</option>
            <option value={'Merge Sort'}>Merge Sort</option>
            <option value={'Heap Sort'}>Heap Sort</option>
            <option value={'Radix Sort'}>Radix Sort</option>
            <option value={'Bubble Sort'}>Bubble Sort</option>
          </select>
      </div>
          <button onClick={handleStartSorting} className="startButton">Start</button>
        
    </>
    
  )
};
