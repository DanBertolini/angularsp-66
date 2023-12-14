import { Status } from '../enums/status.enum';

export interface Task {
  title: string;
  dueDate: string;
  status: Status;
}
