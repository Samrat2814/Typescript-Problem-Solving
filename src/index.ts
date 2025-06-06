function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined || toUpper === true) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}




type Book = {
  title: string;
  rating: number;
};

function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => item.rating >= 4);
}




type ArrayOfStrings = string[];
type ArrayOfNumbers = number[];

function concatenateArraysString(...arrays: ArrayOfStrings[]): ArrayOfStrings {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

function concatenateArraysNumber(...arrays: ArrayOfNumbers[]): ArrayOfNumbers {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}




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
const myCar = new Car("Toyota", 2020, "Corolla");



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}




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


