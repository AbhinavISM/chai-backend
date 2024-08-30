import { ApiError } from "../utils/ApiError.js";

const handleAPIError = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        });
    }
    // Default error handling for other types of errors
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
}

export default handleAPIError