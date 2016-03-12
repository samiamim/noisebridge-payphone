include('./dtmf_functions.js');

session.answer();
consoleLog("Value of first DTMF input is: " + session.getVariable("destination_number"));
//var selection = say_with_dtmf_input(session, "welcome to noise bridge. Press a key to continue.", "1234567", 2000);
var selection = session.getVariable("destination_number");

switch(selection) {
  case "1":
    session.speak("flite", "slt", "Leave a message. We will post it to group chat. ell oh ell.");
    session.recordFile("/tmp/myrecording.wav");
    break;
  case "2":
    session.speak("flite", "slt", "Noisebridge has rules. They are on the internet. Please read them. Be excellent like Bill and Ted!");
    break;
  case "3":
    session.speak("flite", "slt", "Start speaking. Your voice will end up on eye are sea. Ha ha ha ha ha.");
    session.recordFile("/tmp/irc_dictation.wav");
    break;
  case "4":
    session.speak("flite", "slt", "There is a hacker space in Oakland called Sudo room. There is a hacker space in Berlin called sea Base. There is one in Los Angeles called Crash Space.");
    break;
  case "5":
    session.speak("flite", "slt", "In the future, I'll call a random hacker space.");
    break;
  case "6":
    session.speak("flite", "slt", "No one knows what Telephreak is. Whatever.");
    break;
  default:
    session.speak("flite", "slt", "It was the best of times. It was the worst of times. It was the combination best of times and worst of times.");
}
session.hangup();
