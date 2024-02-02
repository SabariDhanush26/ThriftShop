class ApiError extends Error {
    constructor(
        StatusCode,
        message = "Something Went Wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.StatusCode = StatusCode;
        this.data=null;
        this.error = error;
        this.message = message;
        this.success = false;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
