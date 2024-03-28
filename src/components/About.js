import { useContext } from "react";
import { GIT_USER_URL } from "../../utils/constants";
import useFetchData from "../../utils/useFetchData";
import User from "./User";
import UserContext from "../../utils/UserContext";
// import UserClass from "./UserClass";

const About = () => {
  const user = useFetchData(GIT_USER_URL);
  const { loggedInUser } = useContext(UserContext);
  console.log(user, "user");
  return (
    <div className="flex flex-col text-center items-center gap-y-4 font-bold py-2 pt-16">
      <div>This is a food ordering app built using React JS</div>
      <div>
        <div>LoggedInUser: {loggedInUser}</div>
        <User {...user} />
        {/* <UserClass name="Ajay Jinka (Class)" location="Pune" /> */}
      </div>
    </div>
  );
};

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("Parent componentDidMount");
//   }

//   render() {
//     console.log("Parent Render");
//     return (
//       <div>
//         <h1>About us</h1>
//         <h2>This is Namaste React Web Series</h2>
//         <div>
//           <UserClass name="Ajay Jinka (Class)" location="Pune" />
//         </div>
//       </div>
//     );
//   }
// }

export default About;
