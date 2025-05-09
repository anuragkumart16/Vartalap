export default function errorResponse(status,message,data,res) {
    return res.status(status).json({
        success: false,
        message,
        data,
        status
    })
}