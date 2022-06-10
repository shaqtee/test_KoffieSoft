import React, { useEffect, useReducer } from "react";

export const UseReducer = () => {
  const cetak = (state, action) => {
    switch (action.type) {
      case "namaBaru":
        console.log(action.payload.tes);
        return { nama: state.nama + action.payload.tes };
    }
  };

  const [vari, patchVari] = useReducer(cetak, { nama: "nama" });

  const z = [1, 2, 3];
  const diklik = (gon) => {
    patchVari({
      type: "namaBaru",
      payload: { nama: " ini payload", tes: gon },
    });
  };

  useEffect(() => {
    console.log("testing");

    return () => {
      console.log("abort");
    };
  }, [vari.nama]);

  return (
    <div className="testing">
      <div className="bg-neutral">
        <h1>Testing</h1>
        <h1 className="h-5 text">{vari.nama}</h1>
        <h1 className="h-5 text">{vari.tes}</h1>
        <br />
        <button className="btn btn-outline" onClick={() => diklik(z)}>
          useReducer
        </button>
      </div>
    </div>
  );
};
