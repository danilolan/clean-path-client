export type CustomerDTO = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  email: string;
  phone: string;
  position: {
    x: number;
    y: number;
  };
};

export type Position = {
  x: number;
  y: number;
};

export type Point = {
  name: string;
  position: Position;
};

export type PathDto = Point[];
