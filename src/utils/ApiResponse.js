class ApiResponse {
    static success(res, data, message = 'Success', statusCode = 200) {
        res.status(statusCode).json({
            status: 'success',
            message,
            data,
        });
    }

    static error(res, message = 'Error', statusCode = 500) {
        res.status(statusCode).json({
            status: 'error',
            message,
        });
    }
}

module.exports = ApiResponse;