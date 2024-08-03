export type ScoringProps = {
    formValues?: IScoringValues;
  };
  
  export type IScoringValues = {
    gender: string;
    maritalStatus: string;
    dependentAmount: number | null;
    passportIssueDate: string;
    passportIssueBranch: string;
      employmentStatus: string;
      employerINN: number | null;
      salary: number | null;
      position: string;
      workExperienceTotal: number | null;
      workExperienceCurrent: number | null;
  };
  
  type Employment = Pick<
    IScoringValues,
    | "employmentStatus"
    | "employerINN"
    | "salary"
    | "position"
    | "workExperienceTotal"
    | "workExperienceCurrent"
  >;
  
  export type ScoringType = {
    gender: "MALE" | "FEMALE"| string;
    maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER" | string;
    dependentAmount: number | null;
    passportIssueDate: string;
    passportIssueBranch: string;
    employment: Employment;
    account?: string;
  };
  