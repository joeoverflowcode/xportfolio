

const ContactButton = ({text, className}) => {
  return (
<button className={`m-4 p-1 rounded-full bg-gradient-to-b from-blue-900 to-gray-800 opacity-100 ${className}`}><a href="#contact"><span className="block text-black px-10 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">{text}</span></a>
</button>


  )
}

export default ContactButton