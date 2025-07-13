import Link from "next/link";

interface Props {
  path: string;
  label: string;
}
export const ActiveLink = ({ path, label }: Props) => {
  return (
    <Link className="mr-2" href={path}>
      {label}
    </Link>
  );
};
