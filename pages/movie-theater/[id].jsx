import { useRouter } from "next/router";
import Link from "next/link";

const MovieTheater = () => {
  const router = useRouter();
  const randNum = Math.ceil(Math.random() * 10);
  return (
    <div>
      <Link href="/" prefetch>
        <h3>Back To Home</h3>
      </Link>
      <Link href={`/movie-theater/dynamic-${randNum}`} prefetch>
        <h3>Go To Dynamic Page</h3>
      </Link>
    </div>
  );
};

export default MovieTheater;
