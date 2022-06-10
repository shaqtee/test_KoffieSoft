import React from "react";
import axios from "axios";
import jfd from "js-file-download";

const Tailwind = () => {
  const array = [
    "abdulbadi",
    "abdulghani",
    "abdurrazaq",
    "abdullah",
    "adi sakti",
  ];

  /* upload */
  const [image, setImage] = React.useState({
    uploaded: "https://place-hold.it/300",
  });
  const [msg, setMsg] = React.useState();

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    let uploaded = URL.createObjectURL(e.target.files[0]);
    setImage({ uploaded, isSave: e.target.files[0] });
  };

  const uploadImage = async () => {
    if (!image.isSave) return alert("Please select an image");

    let formData = new FormData();
    formData.append("photo", image.isSave, image.isSave.name);

    try {
      await axios
        .post("/file", formData)
        .then((res) =>
          setMsg(`${res.data.imageURL.split("/").pop()} uploaded`)
        );
    } catch (err) {
      setImage({ uploaded: "https://place-hold.it/300" });
    }
  };
  /* endUpload */

  /* download */
  const download = async () => {
    await axios
      .get("/file/download/saweria-1654210103491.png", {
        responseType: "blob",
      })
      .then((res) => jfd(res.data, "download.png"));
  };
  /* endDownload */

  return (
    <div>
      <div className="tailwind">
        /client/src/app.css{" "}
        <span className="MS_customClass">(customClass)</span>
        <div className="border-2 p-2 flex justify-center">
          {/* GRADIENT TEXT */}
          <span className="MS_customClass text-5xl">
            Tailwind Text Gradient
          </span>
        </div>
        {/* FLEX ALIGNING */}
        <div className="flex items-center justify-center w-full h-20 bg-neutral text-center mt-2">
          <span>
            hallo Flex | item-center (vertically) & justify-center
            (horizontally)
          </span>
        </div>
        {/* GRID */}
        <div className="grid sm:grid-cols-3 place-items-center">
          <div className="sm:col-span-1 | h-20 w-full bg-blue-400 text-black ">
            GRID_1
          </div>
          <div className="sm:col-span-2 | w-1/2 h-12 bg-red-400 text-black ">
            GRID_2
          </div>
        </div>
      </div>
      {/* DIV & SPAN BEHAVE */}
      <span className="bg-red-400 text-black p-2">Span Behavior</span>
      <div className="bg-yellow-400 text-black p-2">Div Behavior</div>
      {/* FLEX Column */}
      <div className="grid grid-rows-3 grid-flow-col text-black">
        <div className="row-span-3 bg-blue-400">FLEX_1</div>
        <div className="col-span-2 bg-red-400">FLEX_2</div>
        <div className="row-span-2 col-span-2 bg-yellow-400">FLEX_3</div>
      </div>
      {/* FLEX Grow & Shrink */}
      <div className="flex">
        <div className="flex-1 w-20 h-14 bg-red-400">FLEX_1</div>
        <div className="flex-shrink h-14 bg-green-400 text-black break-normal">
          FLEX_2 | Shrink responsive mengikuti text, opsi break-normal wrapping
          berdasarkan kata kalau break-all berdasarkan karakter
        </div>
        <div className="flex-1 w-20 h-14 bg-blue-400">FLEX_3</div>
      </div>
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-indigo-400 via-slate-400 to-indigo-400 w-full h-20 ">
        Gradient Background
      </div>
      {/* style ( image outSource inSource ) - arbitrary value - overflow & class bg-fixed */}
      <div
        //style={{ backgroundImage: `url(${img})` }}
        style={{
          backgroundImage: `url('http://source.unsplash.com/1000x600?computer')`,
        }}
        className="h-40 w-40 bg-[#bada55] mx-auto overflow-y-scroll bg-fixed"
      >
        <p className="p-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below htmlFor those interested. Sections 1.10.32
          and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <div className="h-full w-full bg-red-900 text-center">learn tailwind</div>
      {/* Looping */}
      <div className="flex flex-col h-44 justify-between">
        <span className="MS_customClass text-2xl text-right mr-14">
          Map Loop
        </span>
        {array.map((arr, i) => (
          <div key={i++} className="mx-auto w-full flex justify-center">
            <input
              value={arr}
              className="bg-slate-200 text-slate-500 w-40 h-6 p-3 rounded text-center"
              readOnly
            />
          </div>
        ))}
      </div>
      <div>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below htmlFor those interested. Sections 1.10.32 and 1.10.33
        from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
        their exact original form, accompanied by English versions from the 1914
        translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is
        not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below htmlFor those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham. Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below htmlFor those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
      </div>
      {/* smooth-scroll */}
      <div className="container">
        <div className="flex fixed bottom-3 right-3 w-12 h-12 bg-white rounded-full">
          <a href="#" className="m-auto text-white shadow-sm">
            🔺
          </a>
        </div>
      </div>
      {/* upload file */}
      <div className="flex flex-col py-5 items-center gap-2 bg-neutral">
        <img
          src={image.uploaded}
          className="h-40 w-40 bg-[#bada55] overflow-y-scroll object-contain"
        />
        <div className="form-control">
          <label className="input-group input-group-md">
            <span>MD</span>
            <input
              type="file"
              placeholder="Type here"
              className="input input-bordered input-md form-control pt-1"
              onChange={fileHandler}
            />
          </label>
        </div>
        <span className="MS_customClass">{msg}</span>
        <button className="btn btn-outline w-28" onClick={uploadImage}>
          goUpload
        </button>
        <button className="btn btn-outline w-28" onClick={download}>
          goDownload
        </button>
      </div>
    </div>
  );
};

export default Tailwind;
