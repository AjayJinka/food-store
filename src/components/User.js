const User = ({ name, avatar_url, location }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1>Built by: {name}</h1>
      <img className="h-48" src={avatar_url}></img>
      <h2>Location: {location || "Kadapa"}</h2>
      <h3>Email: test@gmail.com</h3>
    </div>
  );
};

export default User;
