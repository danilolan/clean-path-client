import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-primary text-center">Clean Path App</h1>
      <p className="text-center text-darkGrey mt-4">
        A clean path app that can create Customers with positions X and Y and
        return the best possible path between all the positions.
      </p>
    </main>
  );
}
