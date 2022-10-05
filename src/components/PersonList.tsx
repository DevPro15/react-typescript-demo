
import { Name } from "./person.types";

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
}
