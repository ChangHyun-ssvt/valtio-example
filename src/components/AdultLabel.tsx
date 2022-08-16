interface AdultLabelProps {
  isAdult: boolean;
}

export default function AdultLabel({ isAdult }: AdultLabelProps) {
  return <p>{isAdult ? "성인입니다." : "어린이입니다."}</p>;
}
