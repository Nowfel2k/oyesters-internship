import { IconButton } from "@material-ui/core";
import {
  ArrowRight,
  AttachFile,
  InsertEmoticon,
  MenuBook,
} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";

import React from "react";
import "../Styles/ChatPage.css";
import Message from "./Children/Message";

function ChatPage({ name, status }) {
  return (
    <div className="chatPage">
      <div className="chatPage__header">
        <div className="header__left">
          <img
            src="https://www.universalstudentliving.com/app/uploads/2019/06/beautiful-beauty-casual-762020.jpg"
            alt=""
          />
          <div className="header__info">
            <h3>{name}</h3>
            <p>{status}</p>
          </div>
        </div>

        <div className="header__right">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatPage__body">
        <Message
          image="https://www.universalstudentliving.com/app/uploads/2019/06/beautiful-beauty-casual-762020.jpg"
          data="Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application."
        />
        <Message
          image="https://www.universalstudentliving.com/app/uploads/2019/06/beautiful-beauty-casual-762020.jpg"
          data="Can i send you files?"
        />
        <Message
          image="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          data="Hey! Okay, send out. I will look into it. "
          user
        />
        <Message
          image="https://www.universalstudentliving.com/app/uploads/2019/06/beautiful-beauty-casual-762020.jpg"
          data="Style.zip"
        />

        <Message
          image="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          data="Hello! I tweaked everything you asked. I am sending the finished file."
          user
        />
      </div>

      <div className="chat__footer">
        <IconButton>
          <AddIcon />
        </IconButton>
        <form action="">
          <input placeholder="Type a message here" type="text" />
          <button disabled={true}>Send</button>
        </form>
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <IconButton className="send">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatPage;
