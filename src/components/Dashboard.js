import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <div>
        <h1>Welcome to Dashboard</h1>
      <h2>Authentication Successful</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
