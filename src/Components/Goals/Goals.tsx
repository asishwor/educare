import { useEffect, useState } from "react";
import { GoalsCardWrapper } from "./Goals.style";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Goals = () => {
  //GetIcon function
  const getIcon = (icon: string) => {
    switch (icon) {
      case "DesignServicesIcon":
        return <DesignServicesIcon />;
      case "QueryStatsIcon":
        return <QueryStatsIcon />;
      case "WorkspacePremiumIcon":
        return <WorkspacePremiumIcon />;
    }
  };

  interface goalsObject {
    id: number;
    title: string;
    content: string;
    icon: string;
  }
  const [goal, setGoal] = useState<goalsObject[]>();
  useEffect(() => {
    fetch("./jsonFiles/goals.json")
      .then((res) => res.json())
      .then((data) => {
        setGoal(data);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <GoalsCardWrapper>
            <h2>Achieve Your Goals With Us</h2>
            <p>
              Build high self esteem believe in yourself , have confindence ,
              like and feel good about yourself , take pride in what you do .
              Focus with a positive attitude always expect the best possible
              outcome for what you do.
            </p>
            <div className="goals__cardWrapper">
              {goal?.map((elm) => {
                console.log(elm.icon);
                return (
                  <div className="card" key={elm.id}>
                    {getIcon(elm.icon)}
                    <div className="card__icon">
                      <div className="icon"></div>
                      <h4 className="title">{elm.title}</h4>
                      <p className="content">{elm.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GoalsCardWrapper>
        </div>
      </section>
    </>
  );
};
export default Goals;
