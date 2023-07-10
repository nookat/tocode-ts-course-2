type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

type BorderStyle = Extract<Style, 'none'> | `${Exclude<Style, 'none'>} ${Lowercase<Color>}`;

const borderStyle: BorderStyle = 'solid red';

export {}