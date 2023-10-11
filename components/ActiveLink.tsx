import { FC, CSSProperties } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const style: CSSProperties = {
  color: "blue",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}
export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{text}</span>
    </Link>
  );
};
