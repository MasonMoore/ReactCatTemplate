function checkIfMobile() {
  var isMobile = false; //initiate as false
  // device detection
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true
  return isMobile;
  }
}

module.exports = {
  checkIfMobile: checkIfMobile
}
