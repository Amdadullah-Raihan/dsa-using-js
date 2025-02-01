const eventLoop = {
    queue: [],

  
    addCallback(callback) {
      this.queue.push(callback);
    },
  
    run() {
      while (this.queue.length > 0) {
        const callback = this.queue.shift();
        callback();
      }
    },
  };
  
  // Example usage
  console.log("Start");
  
  setTimeout(function () {
    console.log("Timeout callback");
  }, 1000);
  
  eventLoop.addCallback(function () {
    console.log("Custom callback");
  });
  
  console.log("End");
  console.log(eventLoop.queue);
  // Run the event loop
  eventLoop.run();
  