import Navegation from '../../components/Navegation/Navegation'
import './contact.css';

export default function Contact() {

    return (
        <div>
            <Navegation page='contact' />

            <main className='d-flex justify-content-around'>
                <div className='cont-contact d-flex flex-column justify-content-center aling-items-center p-5 mt-5'>
                    <div className='text-center'>
                        <h2>Contact</h2>
                        <h3 className='my-5'>Leave us your information so we can contact you</h3>
                    </div>
                    <form>
                        <div className='row d-flex'>
                            <div className='d-flex flex-column mt-2 col-sm-6'>
                                <label htmlFor='name' className='form-lbl'>Name</label>
                                <input type='text' id='name' className='input-text rounded-2 border-0 p-2' />
                            </div>

                            <div className='d-flex flex-column mt-2 col-sm-6'>
                                <label htmlFor='email' className='form-lbl'>Email</label>
                                <input type="email" id='email' className='input-text rounded-2 border-0 p-2'/>
                            </div>
                        </div>

                        <div className='d-flex flex-column mt-2'>
                            <label htmlFor='message' className='form-lbl'>Message</label>
                            <textarea id='message' className='text-area rounded-2 border-0 p-2' cols='30' rows="10"></textarea>
                        </div>

                        <div className='d-flex mt-4'>
                            <input type='submit' value={"Send"} className='btn btn-submit'/>
                        </div>

                    </form>
                </div>
            </main>

        </div>

    )
}