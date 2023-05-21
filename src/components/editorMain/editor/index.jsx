import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../editorToolbar/index";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import SideBar from "../../sidebar";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div style={{display:'flex', flexDirection: "row"}}>
      <div style={{flex: 1}}>
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={""}
          modules={modules}
          formats={formats}
        />
      </div>

      <SideBar />
    </div>
  );
};

export default Editor;