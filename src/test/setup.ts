import { vi } from "vitest";
import "@testing-library/jest-dom";

Object.defineProperty(window, "location", {
  value: {
    hash: "",
    href: "http://localhost:3000",
  },
  writable: true,
});

vi.mock("@lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));