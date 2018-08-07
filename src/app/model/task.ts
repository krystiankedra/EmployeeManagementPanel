export interface Task {
  _id?: {$oid: string };
  name: string;
  userLastName: string;
  created: string;
  end?: string;
  isDone: boolean;
  body: string;
  user: string;
}
