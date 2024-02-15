export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
};

export type Session = {
  name: string;
  _id: string;
  token: string;
};

export interface Candidate {
  firstName: string;
  lastName: string;
  office: string;
  _id: string;
}

export interface Donation {
  amount: number;
  method: string;
  candidate: Candidate;
  donor: string;
  lat: number;
  lng: number;
  _id: string;
}

export interface DataSet {
  labels: string[];
  datasets: [{ values: number[] }];
}
