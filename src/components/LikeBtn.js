import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Like() {
  const uri = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, updateCounter] = useState(0);
  const [btnState, updateBtn] = useState(true);
  const [likeClass, updateClass] = useState("far fa-heart");

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        updateLike(res.data.data);
        updateBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clickHandler() {
    updateClass("far fa-heart animate-like");
    updateLike(numLike + 1);
    updateCounter(likeCounter + 1);

    if (likeCounter > 3) {
      updateBtn(true);
    }

    axios
      .post(postUri)
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateClass("far fa-heart");
    }, 500);
  }

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;
