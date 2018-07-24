const fs = require('fs');

class Controller {
	readerWriter (list, datapath) {
		fs.readFile(datapath, (err, data) => {
			if (err) throw err;
			let obj = JSON.parse(data)
			obj.push(list) ;
			let objSon = JSON.stringify(obj);
				fs.writeFile(datapath, objSon, (err) => {
					if(err) throw err;
					console.log(`The file has been saved`)
				})
		})
	}
	nodemailer(send, title, text) {
		nodemailer.createTestAccount((err, account) => {
		    let transporter = nodemailer.createTransport({
		        service: "Yandex",
		        auth: {
		            user: mailer.login,
		            pass: mailer.password
		        }
		    });

		    let mailOptions = {
		        from: `"HASAMI 👻" ${mailer.login}`,
		        to: send,
		        subject: title, 
		        html: `<b>${text}</b>`
		    };

		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        console.log('Message sent: %s', info.messageId);
		    });
	})
}
}

module.exports = Controller