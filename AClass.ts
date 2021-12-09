abstract class AClass {
    abstract numbers: number[];
  
    abstract sort(): void;
  
    constructor(n: number) {
      this.fill(n);
    }
  
    private fill(n: number): void {
      function getRandomNumbers(n: number) {
        let arr: number[] = [];
        for (let index = 0; index < n; index++) {
          arr.push(Math.floor(Math.random() * 10) + 1);
        }
        return arr;
      }
      this.numbers = getRandomNumbers(n);
    }
  
    public factorial(): number[] {
      function getFactorials(arr: number[]) {
        function countFactorial(n: number): number {
          return n !== 1 ? n * countFactorial(n - 1) : 1;
        }
        return arr.map((item) => countFactorial(item));
      }
      return getFactorials(this.numbers);
    }
  }
  
  class Class1 extends AClass {
    numbers: number[]; 
    public sort() {
      this.bubbleSort();
      return super.factorial();
    }
  
    private bubbleSort() {
      let arr = this.numbers;
      let len = arr.length;
  
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      this.numbers = arr;
    }
  }
  
  class Class2 extends AClass {
    numbers: number[];
    public sort() {
      this.quickSort();
      return super.factorial();
    }
  
    private quickSort() {
      function quickSortFunction(arr: number[]): number[] {
        if (arr.length < 2) return arr;
  
        let arrCopy = [...arr];
  
        let min = 1;
        let max = arrCopy.length - 1;
        let rand = Math.floor(min + Math.random() * (max + 1 - min));
        let pivot = arrCopy[rand];
        const left = [];
        const right = [];
        arrCopy.splice(arrCopy.indexOf(pivot), 1);
        arrCopy = [pivot].concat(arrCopy);
        for (let i = 1; i < arrCopy.length; i++) {
          if (pivot > arrCopy[i]) {
            left.push(arrCopy[i]);
          } else {
            right.push(arrCopy[i]);
          }
        }
        return quickSortFunction(left).concat(pivot, quickSortFunction(right));
      }
      this.numbers = quickSortFunction(this.numbers);
    }
  }
  
  const class1 = new Class1(10);
  const class2 = new Class2(5);
  
  console.log(class1.numbers);
  console.log(class1.sort());
  
  console.log(class2.numbers);
  console.log(class2.sort());

