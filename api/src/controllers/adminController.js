//const userService = require("../services/adminService");
const User = require("../database/models/adminModel");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

/*const createNewUser = (req, res) => {
    const { body } = req;
  
    if (
      !body.name ||
      !body.lastName ||
      !body.email ||
      !body.phone
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'lastname', 'email', 'phone'",
        },
      });
    }
  
    try {
      const newUser = {
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
      };
      const createduser = userService.createNewUser(newUser);
      res.status(201).send({ status: "OK", data: createduser });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
};*/
const getuser = (req, res) => {
  const { body } = req;
  if (
    !body.email ||
    !body.password
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'password', 'password'",
      },
    });
  }

  const user = User;
  try{
    console.log(body.email)
    console.log(body.password)
    user.find({email: body.email}).then((data) => {
      if(data[0].password == body.password){
        // Generar el token JWT con la variable completa `data`
        const token = jwt.sign(
          {
            id: data[0]._id,
            role: 2
          },
          JWT_SECRET,
          { expiresIn: '1y' } // Token válido por 1 hora
        );

        res.cookie("token", token, {
          domain: ".comexpay.co",
          sameSite: "Lax",
          secure: true, // Cambiar a true si usas HTTPS
          maxAge: 365 * 24 * 60 * 60 * 1000, // 1 año en milisegundos
          httpOnly: false,
        }).send({ status: "OK"});
      }else
      res.status(401).send({ status: "FAILED", data: [0] })
    }).catch((error) => {
      console.log(error)
      res.status(401).send({ status: "FAILED", data: [0] })
    });

  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
  /*user.find({email: body.email}).then((data) => {
    if(data[0].password == body.password){
      res.status(201).send({ status: "OK", data: data});
    }else
      res.status(201).send({status: "OK", data:[]})
  }).catch((error) => {
    res.status(401).send({ status: "FAILED", data: [] })
  });*/
}
module.exports = {
    getuser
};