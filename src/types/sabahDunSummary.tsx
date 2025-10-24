export interface SabahDunSummary {
  /** The date of the election. Format: 'YYYY-MM-DD' */
  date: string;
  /** The election code, e.g., 'SE-12', 'SE-14' */
  election: string;
  /** The state, which is always 'Sabah' for this dataset */
  state: string;
  /** The name of the constituency/seat, e.g., 'N.01 Banggi' */
  seat: string;
  /** The total number of registered voters in the constituency */
  voters_total: number;
  /** The total number of ballots issued to voters */
  ballots_issued: number;
  /** The number of ballots issued but not returned */
  ballots_not_returned: number;
  /** The number of rejected (spoilt) votes */
  votes_rejected: number;
  /** The total number of valid votes counted */
  votes_valid: number;
  /** The difference in votes between the winner and the first runner-up */
  majority: number;
  /** The percentage of registered voters who voted */
  voter_turnout: number;
  /** The majority expressed as a percentage of the total valid votes */
  majority_perc: number;
  /** The percentage of rejected votes out of ballots issued */
  votes_rejected_perc: number;
  /** The percentage of ballots not returned out of ballots issued */
  ballots_not_returned_perc: number;
  /** A string identifier for the constituency */
  constituency_id: string;
  /** A string identifier for the area name of the constituency */
  area_name: string;
}
