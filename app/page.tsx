const Header = () => {
  return (
    <header className="border-gray">
      <h1 className="text-sky-900 text-5xl">Drug Analyse AI</h1>
    </header>
  );
};

const Home: React.FC = () => {
  // code

  return (
    <main className="min-w-svh min-h-svh border-2 bg-sky-200">
      <div className="border-2 border-slate-800 flex flex-col items-center">
        <Header />
      </div>
    </main>
  );
};

export default Home;
