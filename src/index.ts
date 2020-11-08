import express, { json } from 'express';
import nodemailer from 'nodemailer';
import configMail from './config/mailsender';

const app = express();

app.use(json())

app.get('/sendmail', async (req, res) => {

  const transporter =  await nodemailer.createTransport(configMail); //cria as configurações de usuario remetente

  const {
    para,
    assunto,
    conteudo
  }= req.body;

  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: `${para}`,
    subject: `${assunto}`,
    text: `${conteudo}`
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      transporter.close(); //exclui as confiruações de usuario remetente
      return res.json({message:"ERROR "+error});

    } else {
      console.log('sucess '+info);
      transporter.close();
      return res.json({message:"SUCESS  sended for "+para});
    }
  });

})


app.listen(3333);
