import { DurableKit } from "@resocket/server";

//* we export the class. make sure the name matches the `resocket.json` rooms: ["MyServer"]
export class MyServer extends DurableKit {
  //* this allows you to set the throttle for messages sent by server to client. to not averwhelm the client :)
  serverConfig() {
    return { throttle: 0 };
  }
}

//! Note: you can deploy more than one servers at a time :)
// export class SecondServer extends DurableKit {}
