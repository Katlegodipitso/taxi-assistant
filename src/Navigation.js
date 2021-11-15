import * as React from "react";
import { motion } from "framer-motion";
import { MenuLink } from "./MenuLink";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import FindTaxiRank from "./FindTaxiRank";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogoutButton from "./LogoutButton";



const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const user = useSelector(selectUser);
  const [showMenuCategories, setShowMenuCategories] = React.useState(false);

  return (
    <>
        <motion.ul variants={variants}>
        <MenuLink
            path="/"
            link="Home" to="/"
            onClick={() => {setShowMenuCategories(true);
              toggle();
            }}
            width="60%"
          />

          <MenuLink
            path="/menu"
            link="Menu" to="/MenuScreen"
            onClick={() => {setShowMenuCategories(true);
              toggle();
            }}
            width="60%"
          />
          <MenuLink
            link="Report"
            path="/report" 
            to="/ContactScreen"
            onClick={() => {setShowMenuCategories(false);
            toggle();
            }}
            width="60%
            "/>
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {!user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <LogoutButton />
            )}
          </motion.div>
          <motion.div variants={variants2}>
            <br />
            <FindTaxiRank />
          </motion.div>
        </motion.ul>
    </>
  );
};