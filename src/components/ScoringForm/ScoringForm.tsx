import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { IScoringValues, ScoringProps, ScoringType } from "./types";
import { useParams, useNavigate } from "react-router-dom";
import { submitScoringForm } from "../../store/slice/loanSlice";
import "./ScoringForm.scss";
import { AppState } from "../../store/store";

import { Loader } from '../Loader/Loader';
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";

export const SCORING_DEFAULT_VALUES: IScoringValues = {
  gender: "",
  maritalStatus: "",
  dependentAmount: null,
  passportIssueDate: "",
  passportIssueBranch: "",
  employmentStatus: "",
  employerINN: null,
  salary: null,
  position: "",
  workExperienceTotal: null,
  workExperienceCurrent: null,
};

const ScoringForm = ({ formValues = SCORING_DEFAULT_VALUES }: ScoringProps) => {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSending = useSelectorTyped((state: AppState) => state.loan.isProcessing);

  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<IScoringValues>({
    mode: "all",
    defaultValues: formValues,
  });

  const onSubmit = async (data: IScoringValues) => {
    const formattedData: ScoringType = {
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      dependentAmount: data.dependentAmount,
      passportIssueDate: data.passportIssueDate,
      passportIssueBranch: data.passportIssueBranch,
      employment: {
        employmentStatus: data.employmentStatus,
        employerINN: data.employerINN,
        salary: data.salary,
        position: data.position,
        workExperienceTotal: data.workExperienceTotal,
        workExperienceCurrent: data.workExperienceCurrent,
      },
    };
    dispatch(submitScoringForm(formattedData, applicationId as string));
  };

  return (
    <section>
      <form className="Scoring" onSubmit={handleSubmit(onSubmit)} noValidate>

        <div className="Scoring__title">
          <h1 className="Scoring__text">Continuation of the application</h1>
          <p>Step 2 of 5</p>
        </div>

        <div className="Scoring__container">
          <div className="Scoring__inputs Scoring__inputs--flex">
            <Select
              options={["MALE", "FEMALE"]}
              register={register("gender", {
                required: "Select one of the options",
              })}
              id="gender"
              label="What's your gender"
              required
              error={errors.gender}
            />
            <Select
              options={["MARRIED", "DIVORCED", "SINGLE", "WIDOW_WIDOWER"]}
              register={register("maritalStatus", { required: "Select one of the options" })}
              id="maritalStatus"
              label="Your marital status"
              error={errors.maritalStatus}
              required
            />
            <Select
              options={[1, 2, 3, 4]}
              register={register("dependentAmount", { required: "Select one of the options", valueAsNumber: true })}
              id="dependentAmount"
              label="Your number of dependents"
              error={errors.dependentAmount}
              required
            />
            <Input
              isDirty={dirtyFields.passportIssueDate}
              placeholder="Select Date and Time"
              type="date"
              label="Date of issue of the passport"
              name="passportIssueDate"
              register={register("passportIssueDate", { required: "Incorrect date of passport issue date", validate: (value) => value ? undefined : "Date is required" })}
              id="passportIssueDate"
              error={errors.passportIssueDate}
              required
            />
            <Input
              isDirty={dirtyFields.passportIssueBranch}
              placeholder="000000"
              type="text"
              label="Division code"
              name="passportIssueBranch"
              register={register("passportIssueBranch", { required: "The series must be 6 digits", pattern: { value: /^[0-9]{6}$/, message: "Invalid passport issue branch" } })}
              id="passportIssueBranch"
              error={errors.passportIssueBranch}
              required
            />
          </div>
        </div>

        <h3 className="Scoring__title Scoring__title--third">Employment</h3>

        <div className="Scoring__container">
          <div className="Scoring__inputs">
            <Select
              options={["UNEMPLOYED", "SELF_EMPLOYED", "EMPLOYED", "BUSINESS_OWNER"]}
              register={register("employmentStatus", { required: "Select one of the options" })}
              id="employmentStatus"
              label="Your employment status"
              error={errors.employmentStatus}
              required
            />
            <Input
              isDirty={dirtyFields.employerINN}
              placeholder="000000000000"
              type="text"
              label="Your employer INN"
              name="employerINN"
              register={register("employerINN", { required: "Department code must be 12 digits", pattern: { value: /^[0-9]{12}$/, message: "Invalid employer INN" } })}
              id="employerINN"
              error={errors.employerINN}
              required
            />
            <Input
              isDirty={dirtyFields.salary}
              placeholder="For example 100 000"
              type="number"
              label="Your salary"
              name="salary"
              register={register("salary", { required: "Enter your salary", valueAsNumber: true })}
              id="salary"
              error={errors.salary}
              required
            />
            <Select
              options={["WORKER", "MID_MANAGER", "TOP_MANAGER", "OWNER"]}
              register={register("position", { required: "Select one of the options" })}
              id="position"
              label="Your position"
              error={errors.position}
              required
            />
            <Input
              isDirty={dirtyFields.workExperienceTotal}
              placeholder="For example 10"
              type="number"
              label="Your work experience total"
              name="workExperienceTotal"
              register={register("workExperienceTotal", { required: "Enter your work experience total", valueAsNumber: true })}
              id="workExperienceTotal"
              error={errors.workExperienceTotal}
              required
            />
            <Input
              isDirty={dirtyFields.workExperienceCurrent}
              placeholder="For example 2"
              type="number"
              label="Your work experience current"
              name="workExperienceCurrent"
              register={register("workExperienceCurrent", { required: "Enter your work experience current", valueAsNumber: true })}
              id="workExperienceCurrent"
              error={errors.workExperienceCurrent}
              required
            />
          </div>
        </div>

        <Button
          className="Button Scoring__button"
          type="submit"
        >
          {isSending ? (
            <Loader className="Scoring__loader" />
          ) : (
            "Continue"
          )}
        </Button>

      </form>
    </section>
  );
};

export default ScoringForm;