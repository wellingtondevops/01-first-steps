import '@/styles/globals.css';
import Link from "next/link";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  label: string;
}
export const ActiveLink = ({ path, label }: Props) => {
  return (
    <Link className={`${style.link} ${style["active-link"]}`} href={path}>
      {label}
    </Link>
  );
};
