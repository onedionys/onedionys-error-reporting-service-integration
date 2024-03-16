class ErrorReportingService {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    reportError(error) {
      // Kirim error ke layanan pelaporan kesalahan menggunakan API key
      console.error("Error reported:", error);
    }
  }
  
  module.exports = ErrorReportingService;
  