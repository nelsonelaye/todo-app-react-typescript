import React, { useMemo } from "react";

// type stateType = {
//   task: string;
//   date: string;
//   startTime: string;
//   dueTime: string;
// };
export function FetchData(item, setStateAction, state) {
  useMemo(() => {
    let storageData = localStorage.getItem(item);
    if (storageData == null) {
      return;
    } else if (storageData.length >= 1) {
      setStateAction(JSON.parse(storageData));
      console.log(state);
    }
  }, []);
}

// module.exports = { FetchData };
