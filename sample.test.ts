import { test } from "vitest";
import { setupServer } from "msw/node";

const mswServer = setupServer();

test("MSW boundary inference", mswServer.boundary(({ expect }) => {
    // Inferred expect is `any`
    expect(expect).toBeInstanceOf(Function);
    // ^?
}))
