import DrugList from "./DrugList";

const DrugListPage = () => {
  return (
    <section className="flex flex-col items-center m-4">
      <h3 className="text-2xl text-sky-900">Drug List Page</h3>
      <DrugList />
    </section>
  );
};

export default DrugListPage;
