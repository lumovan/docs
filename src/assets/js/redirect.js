var lastDevice = localStorage.lastDevice;
if(typeof(Storage) !== "undefined") {
  if(lastDevice) {
    window.location.replace('/' + lastDevice);
  }
}
