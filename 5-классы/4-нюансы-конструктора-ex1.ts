class Rectangle {
  constructor(private width: number, private height: number) {
    this.log();
  }

  area(): number {
    return this.height * this.width;
  }

  private log(): void {
    console.log(`new Rectangle was created at ${new Date()}`);
  }
}

class Square extends Rectangle {
  constructor(width: number, protected color: string) {
    super(width, width);
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}

const square = new Square(20, 'blue');
square.paint('red');
console.log(square);



export {}