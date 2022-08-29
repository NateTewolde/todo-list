function checkForLocalStorage() {
  if (storageAvailable("localStorage")) {
    return true;
  } else {
    return false;
  }
}

//anytime something is added or removed from tasks/projects
//the local storage is cleared and updated
//with the task and project arrays

//so when would tasks/projects be updated with local storage data.
//whenever getTasks or getProjects is called they also call
//updateTasks/updateProjects which will splice and fill tasks and projects with
//local storage data when available.

function addToLocalStorage(keyName, keyValue) {
  if (!checkForLocalStorage()) {
    return;
  }
  localStorage.setItem(keyName, keyValue);
}

function getFromLocalStorage(keyName) {
  return localStorage.getItem(keyName);
}

function clearLocalStorage() {
  localStorage.clear();
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export {
  checkForLocalStorage,
  addToLocalStorage,
  clearLocalStorage,
  getFromLocalStorage,
};
