export interface ISchedule {
  time: string;
  songs: string[];
}

/*
export interface IPerformers {
  id: number;
  group: string;
  members: string[];
  schedule: { time: string; songs: string[] };
  imgUrl: string;
}
*/

export interface IPerformers {
  id: number;
  group: string;
  imgUrl: string;
}
