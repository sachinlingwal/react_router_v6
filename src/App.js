// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// // import Error from "./components/Error";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Navbar />}>
//           {/* now we will use index keyword  */}
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route index element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact/*" element={<Contact />} />
//           <Route path="/about/:id" element={<About />} />
//         </Route>
//         <Route path="admin" element={<Navbar />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./PublicProtected/Auth";
import Dashboard from "./PublicProtected/Dashboard";

const App = () => {
  const [user, setUser] = useState(false);
  const authroziedUser = () => {
    setUser(true);
  };
  const Logout = () => {
    setUser(false);
  };
  useEffect(() => {
    let user1 = localStorage.getItem("login");
    user1 ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("login", user);
  }, [user]);

  return (
    <div>
      <Routes>
        {!user && (
          <Route path="/auth" element={<Auth auth={authroziedUser} />} />
        )}
        {user && (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard logoutUser={Logout} />}
            />
            <Route
              path="*"
              element={<Navigate to={user ? "dashboard" : "auth"} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
