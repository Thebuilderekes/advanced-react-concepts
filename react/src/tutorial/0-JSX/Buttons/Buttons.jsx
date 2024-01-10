import "./buttons.css";

function Button({ type, children }) {
  const className =
    type === "primary" ? "primary-btn btn" : "secondary-btn btn";
  return <button className={`${className}`}>{children}</button>;
}

function DeleteButton() {
  return <Button type="secondary">delete</Button>;
}

function SaveButton() {
  return <Button type="primary">Save</Button>;
}

function GreetButton() {
  const username = "ekeopre";
  return <Button type="primary">Hello {username}</Button>;
}

export { DeleteButton, SaveButton, GreetButton };
