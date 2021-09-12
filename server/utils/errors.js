class SteamApiError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
  }
}

class InvalidRequestError extends SteamApiError {
  constructor(message = 'Invalid request') {
    super(message);
    this.status = 400;
  }
}

class InvalidCredentialsError extends SteamApiError {
  constructor(message = 'Not authorized') {
    super(message);
    this.status = 401;
  }
}

class InvalidPathError extends SteamApiError {
  constructor(message = 'Page not found') {
    super(message);
    this.status = 404;
  }
}

module.exports = {
  SteamApiError,
  InvalidRequestError,
  InvalidCredentialsError,
  InvalidPathError,
};
