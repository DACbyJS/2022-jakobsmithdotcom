// pages/404.js 
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="bg-js-white h-[500px]">
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the home page...</p> 
    </div>
  );
}