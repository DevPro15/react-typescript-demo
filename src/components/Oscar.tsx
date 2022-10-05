type OscarProps = {
  children: React.ReactNode;
};

export default function Oscar(props: OscarProps) {
  return <h2>{props.children}</h2>;
}
