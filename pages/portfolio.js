import { useEffect } from "react";
import { useRouter } from "next/router";

import pageData from "../lib/constants/pageData";

export default function Portfolio() {
  // redirect this page using the next router
  const router = useRouter();
  useEffect(() => {
    router.push(pageData[6].data.href);
  }, [router]);

  return null;
}
