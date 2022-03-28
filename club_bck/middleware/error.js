const errorHandler = (err, req, res, next) => {
    console.log(err.stack.cyan);

    const error = {...err};

    if(error.name === "CastError"){
        error.message = "Энэ ID буруу бүтэцтэй ID байна!";
        error.statusCode = 400;
    }

    if(error.code === 11000){
        error.message = "Талбарын утгыг давхардуулж өгч болохгүй!";
        err.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error:error.message
    });
}

module.exports = errorHandler;