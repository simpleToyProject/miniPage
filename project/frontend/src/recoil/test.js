import { atom } from "recoil";

export const testAccount = atom({
  key: "#testAccount",
  default: { id: "test", password: 1234 },
});
