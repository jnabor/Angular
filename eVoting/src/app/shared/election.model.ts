import { Candidate } from './candidate.model';

export class Election {
  public candidatesPresident: string[];   /* 3 candidates */
  public candidatesVPInternal: string[];  /* 5 candidates */
  public candidatesVPExternal: string[];  /* 4 candidates */
  public candidatesSecretary: string[];   /* 3 candidates */
  public candidatesTreasurer: string[];   /* 3 candidates */

constructor( candidatesPresident: string[], candidatesVPInternal: string[], candidatesVPExternal: string[], candidatesSecretary: string[], candidatesTreasurer: string[]) {
  this.candidatesPresident = candidatesPresident;
  this.candidatesVPInternal = candidatesVPInternal;
  this.candidatesVPExternal = candidatesVPExternal;
  this.candidatesSecretary = candidatesSecretary;
  this.candidatesTreasurer = candidatesTreasurer;
  }

}
