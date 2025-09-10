import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com"
import ReCAPTCHA from "react-google-recaptcha";


function Contact(){

    const form = useRef();
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* Burası captcha */ 
    const recaptchaRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleCaptchaChange = (token) => {
        if (token) {
            setIsVerified(true);
        }
    };


    const formGonder = (e) => {
        const statuscheckreport = document.getElementById("statuscheck");
        e.preventDefault();

        if (!isVerified) {
            alert("Lütfen robot olmadığınızı doğrulayın.");
            return;
        }

        if(document.getElementById("mail").value == null || document.getElementById("mail").value == "")
        {
            document.getElementById("mail").placeholder = "Mail tercih etmek için buraya tıklayın."
            document.getElementById("mail").value = " ";
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(() => {
            setStatus("Gönderildi!");
            form.current.reset();
            recaptchaRef.current.reset();
            setIsVerified(false);
        })
        .catch((error) => {
            setStatus("Hata...", error.text);
            form.current.reset();
            recaptchaRef.current.reset();
            setIsVerified(false);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
        };

    useEffect(() => {
        const secilenKonu = document.getElementById("konuSelection");
        const digerText = document.getElementById("konuText");

        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);


        if (secilenKonu && digerText) {
            secilenKonu.addEventListener("change", function () {
                if (secilenKonu.value === "diger") {
                    digerText.classList.remove("hidden");
                    digerText.required = true;
                } 
                else {
                    digerText.classList.add("hidden");
                    digerText.required = false;
                    digerText.value = "";
                    
                    secilenKonu.name = "konuSelection";
                    digerText.name = "konuText";
                }
            });

            digerText.addEventListener("focusout", function () {
                const value = digerText.value.trim();
                if (value !== "") {
                    secilenKonu.name = "";
                    digerText.name = "konuSelection";
                }
            });
        }
    }, []);

    //form isim,mail,konu,mesajdan oluşmaktadır. (anime tercihinide sorabilirdim malum önemli mesele :D)
    return(
        <section id="iletisim" className="px-6 py-16 max-w-3xl mx-auto min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">İletişime Geç</h2>
            <p className="mb-8 text-slate-400">Bir sorunuz mu var? Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.</p>
            
            
            <form ref={form} className="grid grid-cols-1 gap-6" onSubmit={formGonder}>
                <input id="isim" name="isim" type="text" placeholder="Adınız ve Soyadınız" className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                <input id="mail" name="mail" type="email" placeholder="E-posta adresiniz (Opsiyonel)" className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <div className="flex items-center gap-3">
                    <select id="konuSelection" name="konuSelection" className="p-3 border rounded w-1/3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                        <option value="" hidden disabled>Bir konu seçiniz</option>
                        <option value="isbirligi">İşbirliği</option>
                        <option value="soru">Soru</option>
                        <option value="oneri">Öneri</option>
                        <option value="diger">Diğer</option>
                    </select>
                    <input id="konuText" name="konuText" type="text" className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3 hidden"/>
                </div>
                <textarea id="mesaj" name="mesaj" rows="5" placeholder="Mesajınız" className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} ref={recaptchaRef}/>
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Gönder</button>
            </form>
            <div id="statuscheck" className="hidden bg-transparent border-1 border-slate-300 rounded-b-3xl p-2 text-center">{status}</div>
        </section>
    )
}
export default Contact