import Link from "next/link";

export default function MdxInternalLink({ href, children }) {
  return (
    <Link href={href} className="underline underline-offset-4 hover:opacity-70 transition-opacity">
      {children}
    </Link>
  );
}
