// import { useState } from "react";
// import type { FormEvent } from "react";

// export default function Form() {

//     const [responseMessage, setResponseMessage] = useState("");

//   async function submit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const response = await fetch("/api/feedback", {
//       method: "POST",
//       body: formData,
//     });
//     const data = await response.json();
//     if (data.message) {
//       setResponseMessage(data.message);
//     }
//   }

//   return (
//     <form onSubmit={submit} className="flex flex-col space-y-5 w-full p-10  border-[1px] lg:border-[3px] border-charcoal shadow-[2px_2px_#282b31] lg:shadow-[3px_3px_#282b31] rounded-[40px]">
//       <label>
//         Name
//         <input type="text" id="name" name="name" className="bg-gray-300" required />
//       </label>
//       <label>
//         Email
//         <input type="email" id="email" name="email" className="bg-gray-300" required />
//       </label>
//       <label>
//         Message
//         <textarea id="message" name="message" className="bg-gray-300" required />
//       </label>
//       <button className="bg-green-600">Send</button>
//        {responseMessage && <p>{responseMessage}</p>}
//     </form>
//   );
// }