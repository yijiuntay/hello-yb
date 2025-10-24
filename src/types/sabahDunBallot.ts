export interface SabahDunBallot {
  /** The date of the election. Format: 'YYYY-MM-DD' */
  date: string;
  /** The election code, e.g., 'SE-12', 'SE-14' */
  election: string;
  /** The state, which is always 'Sabah' for this dataset */
  state: string;
  /** The name of the constituency/seat, e.g., 'N.01 Banggi' */
  seat: string;
  /** The order in which the candidate appeared on the ballot */
  ballot_order: number;
  /** The candidate's full name */
  name: string;
  /** A unique identifier for the candidate */
  candidate_uid: number;
  /** The political party of the candidate */
  party: string;
  /** A unique identifier for the political party */
  party_uid: number;
  /** The total number of votes received by the candidate */
  votes: number;
  /** The percentage of valid votes received by the candidate */
  votes_perc: number;
  /** The election result for the candidate, e.g., 'won', 'lost', 'lost_deposit' */
  result: string;
  /** A string identifier for the area name of the constituency */
  area_name: string;
  /** Whether the candidate was the incumbent for the seat (True/False) */
  wasIncumbent: string | boolean;
}
