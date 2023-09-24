import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "./services/api";
import { User } from "./models/UserModel";

import UserCard from "./components/UserCard";
import { FeedBack } from "./components/FeedBack";
import ModalOverlay from "./components/ModalOverlay";
import FormEditUser from "./components/FormEditUser";

const initialUser = {
  id: "",
  name: "",
  avatar: "",
  email: "",
  birthdate: "",
  createdAt: "",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userSelected, setSetUserSelected] = useState<User>(initialUser);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user-list"],
    queryFn: () => api.getUsers(),
  });

  function handleEditUser(user: User) {
    setSetUserSelected(user);
    setIsOpen(true);
  }

  return (
    <>
      <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormEditUser userSelected={userSelected} />
      </ModalOverlay>
      <section
        style={{
          background: "linear-gradient(124deg, #2B1D50 2.32%, #471B50 103.61%)",
        }}
        className="w-full"
      >
        <div className=" flex flex-col items-center justify-center gap-9">
          <h1 className="text-white text-4xl mt-5">Lista de usuários</h1>

          {isError && (
            <FeedBack message="Ooops! Algo deu errado, tente novamente" />
          )}
          {isLoading && <FeedBack message="Carregando os usuários..." />}

          {data &&
            data.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  handleedituser={() => handleEditUser(user)}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default App;
