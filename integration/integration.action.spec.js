const { eventMock } = require("../__mocks__/event-pre-user-registration");
const { apiMock } = require("../__mocks__/api-pre-user-registration");

const { onExecutePreUserRegistration } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
    eventMock.secrets = {};
  });

  describe("onExecutePreUserRegistration", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecutePreUserRegistration(eventMock, apiMock);
      }).not.toThrow();
    });
  });
});
