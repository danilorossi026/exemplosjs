const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };

  const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
  };

  const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  };

  const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let minIdx = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (i !== minIdx) {
        swap(arr, i, minIdx);
      }
    }
    return arr;
  };

  const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, end);
    return i;
  };

  const quick_sort = (arr, start, end) => {
    if (start >= end) {
      return;
    }
    const pivotIdx = partition(arr, start, end);
    quick_sort(arr, start, pivotIdx - 1);
    quick_sort(arr, pivotIdx + 1, end);
  };

  const ordenando = {
    swap,
    shuffle,
    bubbleSort: bubble_sort,
    selectionSort: selection_sort,
    quickSort: quick_sort,
    partition
  };