import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Hei from "./Hei";

test("hei", () => {
  console.log("-------------------");
  console.log(Hei.setup?.toString());
  const wrapper = mount(Hei);
  expect(wrapper.text()).toContain("hei");
});
