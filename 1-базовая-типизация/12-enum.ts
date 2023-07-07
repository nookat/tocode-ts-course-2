enum ShapeKind12 {
  Circle,
  Square
}

const myShape12 = ShapeKind12.Circle;

interface Circle12 {
  kind: ShapeKind12.Circle;
  radius: number;
}

interface Square12 {
  kind: ShapeKind12.Square;
  sideLength: number;
}

const circle12: Circle12 = {
  radius: 2,
  kind: ShapeKind12.Circle
}

enum StatusCode12 {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403
}

enum Grades12 {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior'
}

interface Developer12 {
  level: Grades12;
  login: string;
}

const dev12: Developer12 = {
  level: Grades12.Junior,
  login: 'nookat'
}

function upGrade12(user: {level: Grades12}): void {
  if (user.level === Grades12.Junior) {
    user.level = Grades12.Middle;
  }

  console.log(user);
}

upGrade12(dev12);