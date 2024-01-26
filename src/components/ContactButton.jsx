

const ContactButton = ({text, className}) => {
  return (
<button className={`m-4 p-1 rounded-full from-blue-800 via-indigo-800 to-blue-900 bg-gradient-to-r opacity-100 ${className}`}><span className="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">{text}</span>
</button>


  )
}

export default ContactButton