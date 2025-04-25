import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
//import { useState } from "react";

export function App() {
  //Esta es una función para formatear el nombre del usuario
  //const formatUsername = (username) => `@${username}`;
  //const [name, setName] = useState('EliCruz');

  const users = [
    {
      userName:'eliCruz',
      name: "Elizabeth Cruz",
      isFollowing: true
    },
    {
      userName: 'argelAlvarez',
      name: 'Argel Álvarez',
      isFollowing: true
    },
    {
      userName: 'netflix',
      name: 'Netflix',
      isFollowing: false
    }
  ]

  return (
    <section className="app">
      {/*<TwitterFollowCard
      //Lo que se hace aqui es pasar a los componentes hijo solamente la función sin ejecutar
        formatUsername={formatUsername}
        username="netflix"
        name="Elizabeth Cruz"
        isFollowing
      />
      <TwitterFollowCard
        formatUsername={formatUsername}
        username="argelAlvarez"
        name="Argel Alavarez"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUsername={formatUsername}
        username="lorel"
        name="María López"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUsername={formatUsername}
        username="efinfo"
        name="Manuel Ruiz"
        isFollowing
      />*/}
      {/*<TwitterFollowCard
        formatUsername={formatUsername}
        username={name}
      >
      Elizabeth Cruz  {/*Este es el hijo del elemento, ya que se envuelve dentro del elemento TwitterFollowCard 
                                  y cuando se pasa como propiedad se pasa como hijo todo el elemnto, por ejemplo si va en un H1 se pasa todo el H1*/}
      {/*</TwitterFollowCard>*/}
      {/*<TwitterFollowCard
        formatUsername={formatUsername}
        username="disney"
      >
      Argel Alvarez
      </TwitterFollowCard>

      <button onClick={() => setName('EliRamírez')}>
        Cambio de nombre
      </button>*/}

{
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
