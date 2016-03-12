function get_dtmf(session, type, digits, arg) {
  console_log("digit: " + digits.digit + "\n");
  var dtmf_digits = "";
  dtmf_digits += digits.digit;

  return false;
}

function say_with_dtmf_input(ivrSession, menuName, validDigits, timeout) {
  console_log("sayMenu: menu=[" + menuName + "] validDigits=[" + validDigits + "]\n");

  session.flushDigits();
  var dtmf_digits = "";
  var repeat = 0;

  while (ivrSession.ready() && dtmf_digits === "" && repeat < 3) { ivrSession.speak("flite", "slt", menuName, get_dtmf);

    if (ivrSession.ready() && dtmf_digits === "") {
      dtmf_digits = ivrSession.getDigits(1, "", timeout);
      if (dtmf_digits === "") {
        repeat++;
      }
    }
  }
  return dtmf_digits;
}
