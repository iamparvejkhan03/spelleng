const request = async (req, res) => {
    try {
        const { fullName, email, whatsapp } = req.body;

        if(!fullName || !email || !whatsapp){
            return res.status(400).json({success:false, message:'All fields are required.'});
        }

        console.log(`Full Name: `, fullName);
        console.log('Email: ', email);
        console.log('WhatsApp: ', whatsapp);

        return res.status(200).json({success:true, message:'We will contact you soon!'});
    } catch (error) {
        throw new Error(error);
    }
}

export default request;