interface ValidationLabelProps {
  isValid: boolean;
}

export default function ValidationText({ isValid }: ValidationLabelProps) {
  return <p>{isValid ? "validation 성공" : "validation 실패"}</p>;
}
