"use client";

import { useState } from "react";

function ThemeChanger() {
  // Themes: winter, cymk, pastel, forest, business, night

  const [theme, setTheme] = useState("winter");

  const changeTheme = (theme) => {
    console.log("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme);
  };
  return (
    <>
      <div>
        <h2 className="text-2xl mb-2">Selected theme is - {theme}</h2>
        <button
          onClick={() => changeTheme("winter")}
          className="btn btn-primary btn-lg m-2 px-2"
        >
          Winter
        </button>
        <button
          onClick={() => changeTheme("cymk")}
          className="btn btn-primary btn-lg m-2 px-2"
        >
          CYMK
        </button>
        <button
          onClick={() => changeTheme("pastel")}
          className="btn btn-primary btn-lg m-2 px-2"
        >
          Pastel
        </button>
        <button
          onClick={() => changeTheme("forest")}
          className="btn btn-primary btn-lg  m-2 px-2"
        >
          Forest
        </button>
        <button
          onClick={() => changeTheme("business")}
          className="btn btn-primary btn-lg m-2 px-2"
        >
          Business
        </button>
        <button
          onClick={() => changeTheme("night")}
          className="btn btn-primary btn-lg m-2 px-2"
        >
          Night
        </button>
      </div>

      {/* Buttons area */}
      <div className="divider divider-primary mt-8">
        Buttons Area. Primary style
      </div>
      <div className="grid grid-rows-2 gap-2 mt-8">
        <div className="flex flex-row gap-2">
          <button className="btn btn-md">Default Button</button>
          <button className="btn btn-md btn-primary">Primary Button</button>
          <button className="btn btn-md btn-secondary">Secondory Button</button>
          <button className="btn btn-md btn-accent">Accent Button</button>
        </div>
        <div className="flex flex-row gap-2">
          <button className="btn btn-md btn-success">Success Button</button>
          <button className="btn btn-md btn-info">Info Button</button>
          <button className="btn btn-md btn-warning">Warning Button</button>
          <button className="btn btn-md btn-error">Error Button</button>
        </div>
      </div>
      {/* Buttons area */}
      <div className="divider divider-success mt-8">
        Text Area - Sucess style
      </div>
      {/* Text area */}
      <div className="grid grid-flow-col grid-col-max gap-2 mt-8">
        <div className="grid grid-col gap-2">
          <p className="text-xs">Extra Small Text</p>
          <p className="text-sm">Small Text</p>
          <p className="text-md">Medium Text</p>
          <p className="text-lg">Large Text</p>
        </div>
        <div className="grid grid-col gap-2">
          <p className="text-xl">Extra Large Text</p>
          <p className="text-2xl">2 Extra Large Text</p>
          <p className="text-3xl">3 Extra Large Text</p>
          <p className="text-4xl">4 Extra Large Text</p>
        </div>
      </div>
      {/* Input area  */}

      <div className="divider divider-info mt-8">
        Input Fields Area. Info style
      </div>

      <div className="grid grid-flow-col grid-col-max gap-2 mt-8">
        <div className="grid grid-col gap-2">
          <input
            type="text"
            placeholder="Input field bordered with w-full and max-w-xs"
            className="input w-full input-bordered max-w-xs"
          />
          <input
            type="text"
            placeholder="Ghost input field. No Background"
            className="input input-ghost w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Disabled input field"
            className="input w-full max-w-xs"
            disabled
          />
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="grid grid-col gap-2">
          {/* xs */}
          <input
            type="text"
            placeholder="Xtra small Input Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          />
          {/* sm */}
          <input
            type="text"
            placeholder="Small Input Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          {/* md */}
          <input
            type="text"
            placeholder="Medium Input Type here"
            className="input input-bordered input-md w-full max-w-xs"
          />
          {/* lg */}
          <input
            type="text"
            placeholder="Large Input Type here"
            className="input input-bordered input-lg w-full max-w-xs"
          />
        </div>
      </div>
      <div className="divider divider-warning mt-8">
        Text Area - Warning style
      </div>
      <div className="grid grid-flow-col grid-col-max">
        <div className="grid grid-col gap-2">
          <textarea
            placeholder="Text area bordered with w-full and max-w-xs"
            className="textarea w-full textarea-bordered max-w-xs"
          ></textarea>
          <textarea
            placeholder="Ghost Text area. No Background"
            className="textarea textarea-ghost w-full max-w-xs"
          ></textarea>
          <textarea
            placeholder="Disabled Text area"
            className="textarea w-full max-w-xs"
            disabled
          ></textarea>
          <textarea
            placeholder="Type here"
            className="textarea w-full max-w-xs"
          ></textarea>
          <textarea
            placeholder="Type here"
            className="textarea w-full max-w-xs"
          ></textarea>
        </div>

        <div className="grid grid-col gap-2">
          {/* xs */}
          <textarea
            placeholder="Xtra small Text area"
            className="textarea textarea-bordered textarea-xs w-full max-w-xs"
          ></textarea>
          {/* sm */}
          <textarea
            placeholder="Small Text area"
            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
          ></textarea>
          {/* md */}
          <textarea
            placeholder="Medium Text area"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          {/* lg */}
          <textarea
            placeholder="Large Text area"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default ThemeChanger;
