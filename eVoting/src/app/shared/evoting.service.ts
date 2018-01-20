import { Vote } from './vote.model';
import { Candidate } from './candidate.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Election } from './election.model';

@Injectable()
export class EvotingService {

  private candidatesPresident : Candidate[] =
  [
    new Candidate('P Candidate 1', 0),
    new Candidate('P Candidate 2', 0),
    new Candidate('P Candidate 3', 0)
  ];

  private candidatesVPInternal: Candidate[] =
  [
    new Candidate('VPI Candidate 1', 0),
    new Candidate('VPI Candidate 2', 0),
    new Candidate('VPI Candidate 3', 0),
    new Candidate('VPI Candidate 4', 0),
    new Candidate('VPI Candidate 5', 0)
  ];

  private candidatesVPExternal: Candidate[] =
  [
    new Candidate('VPE Candidate 1', 0),
    new Candidate('VPE Candidate 2', 0),
    new Candidate('VPE Candidate 3', 0),
    new Candidate('VPE Candidate 4', 0)
  ];

  private candidatesSecretary: Candidate[] =
  [
    new Candidate('S Candidate 1', 0),
    new Candidate('S Candidate 2', 0),
    new Candidate('S Candidate 3', 0)
  ];

  private candidatesTreasurer: Candidate[] =
  [
    new Candidate('T Candidate 1', 0),
    new Candidate('T Candidate 2', 0),
    new Candidate('T Candidate 3', 0)
  ];

  private Election: Election = new Election(this.candidatesPresident, this.candidatesVPInternal, this.candidatesVPExternal, this.candidatesSecretary, this.candidatesTreasurer);


  public getElectionCandidates(){
    return this.Election;
  }


}
