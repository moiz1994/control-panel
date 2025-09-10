import { Card } from "react-bootstrap";
import EditableTripleForm from "./EditableTripleForm";

const BodMonthlyTarget = ({
  monthToDate,
  canTarget,
  targetRaw,
  setTargetRaw,
  targetConvertedCases,
  setTargetConvertedCases,
  OnzCases,
  setOnzCases,
  targetRawNCB,
  setTargetRawNCB,
  targetConvertedNCB,
  setTargetConvertedNCB,
  OnzCasesNCB,
  setOnzCasesNCB,
  targetRawCSD,
  setTargetRawCSD,
  targetConvertedCSD,
  setTargetConvertedCSD,
  OnzCasesCSD,
  setOnzCasesCSD,
  canTargetValue,
  setCanTargetValue,
}) => {
  return (
    <div>
      <Card.Title className="mb-5">BOD Monthly Target</Card.Title>

      {/* Combined */}
      <EditableTripleForm
        label="Monthly Raw Target (Combined)"
        initialValues={monthToDate.targetRaw}
        value={targetRaw}
        setValue={setTargetRaw}
      />

      <EditableTripleForm
        label="Monthly Converted 250ml Target (Combined)"
        initialValues={monthToDate.targetConvertedCases}
        value={targetConvertedCases}
        setValue={setTargetConvertedCases}
      />

      <EditableTripleForm
        label="Monthly 8Onz Target (Combined)"
        initialValues={monthToDate.OnzCases}
        value={OnzCases}
        setValue={setOnzCases}
      />

      {/* NCB */}
      <EditableTripleForm
        label="Monthly Raw Target (NCB)"
        initialValues={monthToDate.targetRawNCB}
        value={targetRawNCB}
        setValue={setTargetRawNCB}
      />

      <EditableTripleForm
        label="Monthly Converted 250ml Target (NCB)"
        initialValues={monthToDate.targetConvertedNCB}
        value={targetConvertedNCB}
        setValue={setTargetConvertedNCB}
      />

      <EditableTripleForm
        label="Monthly 8Onz Target (NCB)"
        initialValues={monthToDate.OnzCasesNCB}
        value={OnzCasesNCB}
        setValue={setOnzCasesNCB}
      />

      {/* CSD */}
      <EditableTripleForm
        label="Monthly Raw Target (CSD)"
        initialValues={monthToDate.targetRawCSD}
        value={targetRawCSD}
        setValue={setTargetRawCSD}
      />

      <EditableTripleForm
        label="Monthly Converted 250ml Target (CSD)"
        initialValues={monthToDate.targetConvertedCSD}
        value={targetConvertedCSD}
        setValue={setTargetConvertedCSD}
      />

      <EditableTripleForm
        label="Monthly 8Onz Target (CSD)"
        initialValues={monthToDate.OnzCasesCSD}
        value={OnzCasesCSD}
        setValue={setOnzCasesCSD}
      />

      {/* Can */}
      <EditableTripleForm
        label="Monthly Can Target"
        initialValues={canTarget[0].sales_target}
        value={canTargetValue}
        setValue={setCanTargetValue}
      />
    </div>
  );
};

export default BodMonthlyTarget;
