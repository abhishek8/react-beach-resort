import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Something to fill up the space. A multiline value to be rendered.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Something to fill up the space. A multiline value to be rendered.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Something to fill up the space. A multiline value to be rendered.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Something to fill up the space. A multiline value to be rendered.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
