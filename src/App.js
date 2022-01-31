import React from "react";
import users from "../src/users.json";
import UserInfo from "./components/UserInfo.js";
import Counter from "./components/Counter.js";
import "./styles/global.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // on peut supprimer la clé et remplacer directement par users
      users: users,
      count: 10,
    };
    // si pas mention de ces 2 lignes ci-dessous faisant explicitement référence à this, on ne va pas pouvoir utiliser les fonctions increment et substract, et dans la console, message indiquant que le propriétés du composant Counter sont "undefined"
    this.increment = this.increment.bind(this);
    this.substract = this.substract.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  substract() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.increment} // on appelle la fonction increment
          substract={this.substract} // on appelle la fonction substract
        />

        {/* Data extracted from users list */}

        {this.state.users.map((user, i) => {
          if (i === 0 || i < this.state.count) {
            return (
              <UserInfo
                key={user.email} // si pas mention de la clé, affichage d'un message d'erreur dans la console du navigateur => requis de React : chaque enfant dans une liste doit avoir une propriété clé unique
                name={user.name}
                email={user.email}
                website={user.website}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default App;
