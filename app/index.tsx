import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/a');
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
