import Table from "./components/table";

export type Customer = {
  name: string;
  email: string;
  phone: string;
  position: {
    x: number;
    y: number;
  };
};

export default function List() {
  return (
    <div>
      <Table />
    </div>
  );
}
