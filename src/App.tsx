import { useQuery } from "@tanstack/react-query";
import { api } from "./services/api";
import UserCard from "./components/UserCard";
import { FeedBack } from "./components/FeedBack";

function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user-list"],
    queryFn: () => api.getUsers(),
  });

  function handleedituser() {
    alert("vc clicou");
  }

  return (
    <section
      style={{
        background: "linear-gradient(124deg, #2B1D50 2.32%, #471B50 103.61%)",
      }}
      className=" w-full"
    >
      <div className=" flex flex-col items-center justify-center gap-9">
      <h1 className="text-white text-4xl mt-5" >Lista de usuários</h1>
      
      {isError && <FeedBack message="Ooops! Algo deu errado, tente novamente" />}
      {isLoading && <FeedBack message="Carregando os usuários..." />}
      {data &&
        data.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              handleedituser={handleedituser}
            />
          );
        })}
      </div>
      
    </section>
  );
}

export default App;
