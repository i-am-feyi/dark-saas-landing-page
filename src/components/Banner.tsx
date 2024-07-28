import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-rainbow">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <Link href="/" className="underline underline-offset-4">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
};
