export interface List {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface ListParam {
  id?: number;
}
