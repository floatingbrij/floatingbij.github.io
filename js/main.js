new TypeIt("#type-writer", {
    
    speed: 75,
    waitUntilVisible: true
  })
  .type("I am Brij.",{delay: 400})
  .pause(1000)
  .delete(10,{delay: 300})
  .type("I love coding.",{delay: 400})
  .pause(1000)
  .delete(14,{delay: 300})
  .type("I love to Develop.",{delay: 400})
  .pause(1000)
  .delete(18,{delay: 300})
  .type("Welcome to my Website.",{delay: 400})
  .go();
