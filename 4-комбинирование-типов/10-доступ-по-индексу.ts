interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      description: string;
      links: string[];
    },
    footer: {
      description: string;
      links: string[];
    },
    body: [
      {
        title: string;
        content: {};
      }
    ]
  }
}

type T0 = DataModel['elements']['footer'];

type someTuple = [number, string, boolean, ...string[]];

const arr: someTuple = [1, 'hello', true, '', 'test', 'false'];

type T1 = someTuple[1]; // number

const sizes = ['small', 'medium', 'large'] as const; // сделает tuple readonly

type T2 = typeof sizes[number]; // финт ушами, вытащит union 'small' | 'medium' | 'large'

export {}