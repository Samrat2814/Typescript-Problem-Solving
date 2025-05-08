function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined || toUpper === true) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// Example 
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));


type Book = {
  title: string;
  rating: number;
};

function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => item.rating >= 4);
}

// Example 
const books: Book[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));


type ArrayOfStrings = string[];
type ArrayOfNumbers = number[];

function concatenateArraysString(...arrays: ArrayOfStrings[]): ArrayOfStrings {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

function concatenateArraysNumber(...arrays: ArrayOfNumbers[]): ArrayOfNumbers {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// Example 
console.log(concatenateArraysString(["a", "b"], ["c"]));
console.log(concatenateArraysNumber([1, 2], [3, 4], [5]));


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Example 
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());


function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// Example 
console.log(processValue("hello"));
console.log(processValue(10));


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((max, current) => {
    return current.price > max.price ? current : max;
  });
}

// Example
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// Example 
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));


async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000); //
  });
}

// Example 
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
