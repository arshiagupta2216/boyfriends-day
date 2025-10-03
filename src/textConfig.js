// This file reads the text configuration and provides it to the app

export const textConfig = {
  greeting: {
    name: "Mera Adiiii <3",
    message: "A Gift For You"
  },

  letter: {
    title: "Read My Letter",
    subtitle: "Click to see your special letter",
    recipient: "To My KuchuPuchu",
    paragraphs: [
      "Happy Boyfriend’s Day to the most amazing person in my life! You make every day brighter with your love, care, and little things that mean so much.",

      "I’m so lucky to have you by my side, and I just want you to know how deeply you’re loved and appreciated today and always."
    ],
    signature: "Yours sincerely,\nApki beti"
  },

  gallery: {
    title: "Some Special Moments",
    subtitle: "Swipe to see more ✨",
    photos: [
      { src: "./images/pic1.jpg", caption: "Thanks for making me smile 💕" },
      { src: "./images/pic2.gif", caption: "I’m so lucky to have you by my side 😊" },
      { src: "./images/pic3.gif", caption: "the most amazing person in my life ✨" }
    ],
    scrollIndicators: 3, // number of dots
    dividerIcon: "📷"
  },

  game: {
    title: "Play a Game!",
    subtitle: "Catch some hearts to unlock a special message",
    completionMessage: "You've completed the game! ✨ But you can play again if you want!",
    winMessage: "You caught my heart! Just like how you've captured my real heart forever..."
  },

  ui: {
    envelopeHint: "Click to open",
    envelopePreview: "💌 A letter for you..."
  },


};
