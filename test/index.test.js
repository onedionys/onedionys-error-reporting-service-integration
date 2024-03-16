const assert = require("assert");
const ErrorReportingService = require("../src/errorReportingService");

describe("ErrorReportingService", function () {
  describe("#reportError()", function () {
    it("should report an error", function () {
      const errorService = new ErrorReportingService("your-api-key");
      const error = new Error("Test error");
      assert.doesNotThrow(() => errorService.reportError(error));
    });
  });
});
