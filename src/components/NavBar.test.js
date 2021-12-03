import React from "react";
import Navbar from "./NavBar";
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';


// include as many test cases as you want here
const links = [
    { text: 'Home', location: "/" },
    { text: 'Language', location: "/language" }
  ];
  // I use test.each to iterate the test cases above
  test.each(links)(
    "Check if Nav Bar have %s link.",
    (link) => {
      render(<Navbar />);
      //Ensure the text is in the dom, will throw error it can't find
      const linkDom = screen.getByText(link.text); 
          
      //use jest assertion to verify the link property
      expect(linkDom).toHaveAttribute("href", link.location);
    }
  );