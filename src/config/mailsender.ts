export default {
    host: 'smtp.gmail.com', //smtp padrao do gmail
    port: 587,  //port padrão do gmail
    secure: false, 
    auth: {
      user: "seuemail@gmail.com",
      pass: `sua senha do gmail`,
    },
    tls:{
      rejectUnauthorized: false
    }
}