import { mailOptions, transporter } from "../../config/nodemailer"


const CONTACT_FIELDS = {
  name: "Name",
  email: "Email",
  country: "Country",
  subject: "Subject",
  message: "Message"
}

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, value] ) => 
    str += `${CONTACT_FIELDS[key]} : \n${value}} \n \n`, "");

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => 
      (str += `<h1>${CONTACT_FIELDS[key]}</h1><p>${val}</p>`, "")
  );

  return {
    text: stringData,
    html: htmlData
  }
}
const handler = async (req, res) => {

  if (req.method === "POST") {
        // Get data submitted in request's body.

    const data = req.body

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!data.name || !data.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ message: 'Name or email not found' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
    
      })

      return res.status(200).json({success: true})

    } catch (error) {
      console.log(error);
      return res.status(400).json({message: error.message})
    }

  }
    return res.status(400).json({message:"Bad request"})

  }

  export default handler